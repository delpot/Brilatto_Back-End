import { Router } from 'express';
import userController from 'src/controllers/user.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class UserRouter {

  routes = Router()
  .get('/', authMiddleware.verifyAdmin, userController.getAllUsers)
  .get('/:id', authMiddleware.verifyAdmin, userController.getOneUser)
  .put('/:id', authMiddleware.verifyAuthorization, userController.updateUser)
  .put('/:id/softDelete', authMiddleware.verifyAuthorization, userController.softDeleteUser)
  .delete('/:id', authMiddleware.verifyAdmin, userController.hardDeleteUser);
}

const userRouter = new UserRouter();

export default userRouter;
