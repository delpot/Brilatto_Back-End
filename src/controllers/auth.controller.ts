import { Request, Response } from 'express';
import { decryptPassword, encryptPassword } from '../utils/encryption.util';
import userService from '../services/user.service';
import jwt from 'jsonwebtoken';

class AuthController {

  async signup(req: Request, res: Response) {
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
  
    if (await userService.getUserByEmail(email)) {
      return res.send({ message: '⚠ User already exists!' });
    }
  
    if (passwordToConfirm !== confirmedPassword) {
      return res.send({ message: "⚠ Passwords don't match!" });
    }
  
    return userService.createUser(
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
  
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.send({ message: '⚠ Missing fields!' });
    }
  
    const user = await userService.getUserByEmail(email);
    if (user && password === decryptPassword(user.password)) {
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
      return res.status(200).json({ loggedUser, token });
    } else {
      return res.send({ message: '⚠ Wrong credentials!' });
    }
  }
  
}

const authController = new AuthController();

export default authController;