import { Router } from 'express';
import {
  verifyAdmin,
  verifyAuthorization,
} from 'src/middlewares/auth.middleware';
import {
  signup,
  login,
  updateUser,
  softDeleteUser,
  hardDeleteUser,
  getOneUser,
  getAllUsers,
} from '../controllers/user.controller';

const router = Router();
router.get('/', verifyAdmin, getAllUsers);
router.get('/:id', verifyAdmin, getOneUser);
router.post('/signup', signup);
router.post('/login', login);
router.put('/:id', verifyAuthorization, updateUser);
router.put('/:id/softDelete', verifyAuthorization, softDeleteUser);
router.delete('/:id', verifyAuthorization, hardDeleteUser);

export default router;
