import { Request, Response } from 'express';
import { decryptPassword, encryptPassword } from '../utils/encryption.util';
import { getUserByEmail, createUser } from '../services/user.service';
import jwt from 'jsonwebtoken';

export async function signup(req: Request, res: Response) {
  const { firstname, lastname, email, password, dateOfBirth, address } =
    req.body;

  if (await getUserByEmail(email)) {
    res.status(400).send('User already exists in Database');
  }

  return createUser(
    firstname,
    lastname,
    email,
    encryptPassword(password),
    dateOfBirth,
    address
  )
    .save()
    .then((createdUser) => {
      return res.status(201).json(`User created in Database: ${createdUser.email}`);
    })
    .catch((error) => res.status(500).json(error));
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send('Missing field');
  }

  const user = await getUserByEmail(email);
  if (user) {
    if (password === decryptPassword(user.password)) {
      const token = jwt.sign(  
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      const { password, ...loggedUser } = user.toObject();
      res.status(200).json({ loggedUser, token });
    } else {
      res.status(400).send('Password doesn\'t match');
    }
  } else {
    res.status(400).send('User Not Found in Database');
  }
}

export async function logout(req: Request, res: Response) {

}
