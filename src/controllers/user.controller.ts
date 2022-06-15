import { Request, Response } from 'express';
import { IUser } from 'src/models/User';
import { decryptPassword, encryptPassword } from 'src/utils/encryption.util';
import { getUserByEmail, createUser } from '../services/user.service';

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
  if (user) {
    if (pwd === decryptPassword(user.password)) {
      const { password, ...others } = user.toObject();
      return res.status(201).json(others);
    } else {
      return res.send({ message: '⚠ Wrong password!' });
    }
  } else {
    return res.send({ message: "⚠ This email doesn't exist!" });
  }
}
