import { Request, Response } from 'express';
import userService from 'src/services/user.service';
import { encryptPassword } from '../utils/encryption.util';

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
  
  async updateUser(req: Request, res: Response) {
    // if (req.body.password) {
    //   encryptPassword(req.body.password);
    // }  

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