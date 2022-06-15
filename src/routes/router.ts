import { Router } from 'express';
import { verifyTokenAndAuthorization } from 'src/middlewares/verifyToken';
import { signup, login, updateUser } from '../controllers/user.controller';

const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.put('/:id', verifyTokenAndAuthorization, updateUser);

export default router;
