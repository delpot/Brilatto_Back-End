import { Router } from 'express';
import { verifyTokenAndAuthorization } from 'src/middlewares/verifyToken';
import {
  signup,
  login,
  updateUser,
  softDeleteUser,
  hardDeleteUser,
} from '../controllers/user.controller';

const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.put('/:id/softDelete', verifyTokenAndAuthorization, softDeleteUser);
router.delete('/:id', verifyTokenAndAuthorization, hardDeleteUser);

export default router;
