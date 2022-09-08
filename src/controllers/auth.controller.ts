import { Request, Response } from 'express';
import { decryptPassword, encryptPassword } from '../utils/encryption.util';
import userService from '../services/user.service';
import jwt from 'jsonwebtoken';

class AuthController {
  async signup(req: Request, res: Response) {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      dateOfBirth,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
    } = req.body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmPassword ||
      !addressLine1 ||
      !city ||
      !postalCode ||
      !country
    ) {
      return res.status(400).send({ message: '⚠ Missing fields!' });
    }

    const emailPattern =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!emailPattern.test(email)) {
      return res.status(400).send({ message: '⚠ Invalid email!' });
    }

    if (await userService.getUserByEmail(email)) {
      return res.status(400).send({ message: '⚠ User already exists!' });
    }

    if (password !== confirmPassword) {
      return res.status(400).send({ message: "⚠ Passwords don't match!" });
    }

    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!passwordPattern.test(password)) {
      return res.status(400).send({ message: '⚠ Invalid password!' });
    }

    const address = {
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
    };

    return userService
      .createUser(
        firstname,
        lastname,
        email,
        encryptPassword(password),
        dateOfBirth,
        address
      )
      .save()
      .then((createdUser) => {
        res.status(201).json(createdUser);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: '⚠ Missing fields!' });
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
      return res.status(400).send({ message: '⚠ Wrong credentials!' });
    }
  }
}

const authController = new AuthController();

export default authController;
