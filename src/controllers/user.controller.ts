import { Request, Response } from 'express';
import { encryptPassword } from 'src/utils/encryption.util';
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
    res.send({ message: '⚠ Missing fields!' });
  }

  (await getUserByEmail(email)) ??
    res.send({ message: '⚠ User already exists!' });

  if (passwordToConfirm !== confirmedPassword) {
    res.send({ message: "⚠ Passwords don't match!" });
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
