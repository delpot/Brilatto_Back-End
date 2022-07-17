import { Request, Response } from 'express';
import { encryptPassword } from '../utils/encryption.util';
import {
  getUserByIdAndUpdate,
  getUserByIdAndHardDelete,
  getUserByIdAndSoftDelete,
  getUserById,
  getUsers,
} from '../services/user.service';

export async function getAllUsers(req: Request, res: Response) {
  return getUsers()
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getOneUser(req: Request, res: Response) {
  return getUserById(req.params.id)
    .then((user) => {
      const { password, ...foundUser } = user.toObject();
      return res.status(200).json(foundUser);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateUser(req: Request, res: Response) {
  if (req.body.password) {
    encryptPassword(req.body.password);
  }

  return getUserByIdAndUpdate(req.params.id, req.body)
    .then((updatedUser) => {
      res.status(201).json(updatedUser);
    })
    .catch((error) => res.status(500).json(error));
}

export async function softDeleteUser(req: Request, res: Response) {
  return getUserByIdAndSoftDelete(req.params.id)
    .then((softDeletedUser) => {
      res.status(201).json(softDeletedUser);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteUser(req: Request, res: Response) {
  return getUserByIdAndHardDelete(req.params.id)
    .then((deletedUser) => {
      res.status(200).json(deletedUser);
    })
    .catch((error) => res.status(500).json(error));
}
