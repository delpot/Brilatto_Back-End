import { Request, Response } from 'express';
import { IUser } from 'src/models/User';
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

  return getUserByEmail(email)
    .then((user) => {
      if (user) {
        res.send({ message: '⚠ User already exists!' });
      } else {
        if (passwordToConfirm !== confirmedPassword) {
          res.send({ messsage: "⚠ Passwords don't match!" });
        }
        createUser(firstname, lastname, email, confirmedPassword)
          .save()
          .then((createdUser) => {
            res.status(201).json(createdUser);
          })
          .catch((err) => res.status(500).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
}
