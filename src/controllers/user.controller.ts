import { Request, Response } from 'express';
import userService from 'src/services/user.service';
import { decryptPassword, encryptPassword } from '../utils/encryption.util';

class UserController {

  async getAllUsers(req: Request, res: Response) {
    return userService.getUsers()
      .then((users) => {
        return res.status(200).json(users);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async getOneUser(req: Request, res: Response) {
    return userService.getUserById(req.params.id)
      .then((user) => {
        const { password, ...foundUser } = user.toObject();
        return res.status(200).json(foundUser);
      })
      .catch((error) => res.status(500).json(error));
  }

  async updatePassword(req: Request, res: Response) {
    const {
      oldPassword,
      newPassword,
    } = req.body;

    if (!oldPassword || !newPassword ) {
      return res.status(400).send({ message: '⚠ Missing fields!' });
    }
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!passwordPattern.test(newPassword)) {
      return res.status(400).send({ message: '⚠ Invalid password!' });
    }

    const user = await userService.getUserById(req.params.id);
    const password = decryptPassword(user.password);

    if (user) {
      if (password === oldPassword) {
        user.password = encryptPassword(newPassword);
        await user.save();
        res.status(200).json(user);
      } else {
        return res.status(400).send({ message: '⚠ Wrong password!' });
      }
    } else {
      return res.status(400).send({ message: '⚠ User not found!' });
    }
  }
  
  async updateUser(req: Request, res: Response) {
    const {
      firstname, 
      lastname, 
      email, 
      dateOfBirth, 
      addressLine1, 
      addressLine2, 
      city, 
      postalCode, 
      country 
    } = req.body;

    const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!emailPattern.test(email)) {
      return res.status(400).send({ message: '⚠ Invalid email!' });
    }

    const address = {
      addressLine1, 
      addressLine2, 
      city, 
      postalCode, 
      country 
    }
    return userService.getUserByIdAndUpdate(req.params.id, { firstname, lastname, email, dateOfBirth, address})
      .then((updatedUser) => {
        res.status(201).json(updatedUser);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async softDeleteUser(req: Request, res: Response) {
    return userService.getUserByIdAndSoftDelete(req.params.id)
      .then((softDeletedUser) => {
        res.status(201).json(softDeletedUser);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async hardDeleteUser(req: Request, res: Response) {
    return userService.getUserByIdAndHardDelete(req.params.id)
      .then((deletedUser) => {
        res.status(200).json(deletedUser);
      })
      .catch((error) => res.status(500).json(error));
  }
  
}

const userController = new UserController();

export default userController;