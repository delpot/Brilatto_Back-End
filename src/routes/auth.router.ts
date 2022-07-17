import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller';

export const authRouter = Router()
  .post('/signup', signup)
  .post('/login', login);
