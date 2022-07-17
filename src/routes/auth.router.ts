import { Router } from 'express';
import { signup, login } from '../controllers/user.controller';

export const authRouter = Router()
  .post('/signup', signup)
  .post('/login', login);
