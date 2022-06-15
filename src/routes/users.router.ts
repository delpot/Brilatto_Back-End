import { Router } from 'express';
import {
  verifyAdmin,
  verifyAuthorization,
} from 'src/middlewares/auth.middleware';
import {
  updateUser,
  softDeleteUser,
  hardDeleteUser,
  getOneUser,
  getAllUsers,
} from '../controllers/user.controller';

const router = Router();
router.get('/', verifyAdmin, getAllUsers);
router.get('/:id', verifyAdmin, getOneUser);
router.put('/:id', verifyAuthorization, updateUser);
router.put('/:id/softDelete', verifyAuthorization, softDeleteUser);
router.delete('/:id', verifyAuthorization, hardDeleteUser);

export default router;
