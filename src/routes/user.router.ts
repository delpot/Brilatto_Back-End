import { Router } from 'express';
import {
  verifyAdmin,
  verifyAuthorization,
} from '../middlewares/auth.middleware';
import {
  updateUser,
  softDeleteUser,
  hardDeleteUser,
  getOneUser,
  getAllUsers,
} from '../controllers/user.controller';

export const usersRouter = Router()
  .get('/', verifyAdmin, getAllUsers)
  .get('/:id', verifyAdmin, getOneUser)
  .put('/:id', verifyAuthorization, updateUser)
  .put('/:id/softDelete', verifyAuthorization, softDeleteUser)
  .delete('/:id', verifyAdmin, hardDeleteUser);
