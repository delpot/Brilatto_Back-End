import { Request, Response } from 'express';
import { decryptPassword, encryptPassword } from 'src/utils/encryption.util';
import { getUserByEmail, createUser } from '../services/user.service';
import jwt from 'jsonwebtoken';

export async function signup(req: Request, res: Response) {
  const { firstname, lastname, email, passwordToConfirm, confirmedPassword } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !passwordToConfirm ||
    !confirmedPassword
  ) {
    return res.send({ message: '⚠ Missing fields!' });
  }

  if (await getUserByEmail(email)) {
    return res.send({ message: '⚠ User already exists!' });
  }

  if (passwordToConfirm !== confirmedPassword) {
    return res.send({ message: "⚠ Passwords don't match!" });
  }

  return createUser(
    firstname,
    lastname,
    email,
    encryptPassword(confirmedPassword)
  )
    .save()
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch((error) => res.status(500).json(error));
}

export async function login(req: Request, res: Response) {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.send({ message: '⚠ Missing fields!' });
  }

  const user = await getUserByEmail(email);
  if (user && pwd === decryptPassword(user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_JWT,
      {
        expiresIn: '1h',
      }
    );
    const { password, ...loggedUser } = user.toObject();
    return res.status(201).json({ loggedUser, token });
  } else {
    return res.send({ message: '⚠ Wrong credentials!' });
  }
}
