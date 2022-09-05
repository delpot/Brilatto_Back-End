import { Router } from 'express';
import authController from 'src/controllers/auth.controller';
import { verifyAuthentication } from 'src/middlewares/auth.middleware';

class AuthRouter {

 routes = Router()
  .post('/signup', authController.signup)
  .post('/login', authController.login);

}

const authRouter = new AuthRouter();

export default authRouter;