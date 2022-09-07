import { Router } from 'express';
import userController from 'src/controllers/user.controller';
import {verifyAdmin, verifyAuthorization, } from 'src/middlewares/auth.middleware';

class UserRouter {

  routes = Router()
  .get('/', verifyAdmin, userController.getAllUsers)
  .get('/:id', verifyAuthorization, userController.getOneUser)
  .put('/:id', verifyAuthorization, userController.updateUser)
  .put('/:id/softDelete', verifyAuthorization, userController.softDeleteUser)
  .delete('/:id', verifyAdmin, userController.hardDeleteUser);
}

const userRouter = new UserRouter();

export default userRouter;
