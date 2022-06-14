import { Request, Response } from 'express';
import UserService from '../services/user.service';

const signup = async (req: Request, res: Response) => {
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

  await UserService.getUserByEmail(email)
    .then((user) => {
      if (user) {
        res.send({ message: '⚠ User already exists!' });
      } else {
        if (passwordToConfirm !== confirmedPassword) {
          res.send({ messsage: "⚠ Passwords don't match!" });
        }
        UserService.createUser(firstname, lastname, email, confirmedPassword)
          .save()
          .then((createdUser) => {
            res.status(201).json(createdUser);
          })
          .catch((err) => res.status(500).json(err));
      }
    })
    .catch((err) => res.status(500).json(err));
};

export default { signup };
