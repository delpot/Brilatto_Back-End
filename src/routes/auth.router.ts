import { Router } from 'express';
import authController from 'src/controllers/auth.controller';

class AuthRouter {
  routes = Router()
    .post('/signup', authController.signup)
    .post('/login', authController.login);
}

const authRouter = new AuthRouter();

export default authRouter;
