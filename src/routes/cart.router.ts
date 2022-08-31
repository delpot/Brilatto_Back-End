import { Router } from 'express';
import cartController from 'src/controllers/cart.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class CartRouter {

  routes = Router()
  .get('/', authMiddleware.verifyAdmin, cartController.getAllCarts)
  .get('/:userId', authMiddleware.verifyAuthorization, cartController.getUserCart)
  .post('/add', authMiddleware.verifyAuthentication, cartController.createCart)
  .put('/:id', authMiddleware.verifyAuthorization, cartController.updateCart)
  .delete('/:id', authMiddleware.verifyAuthorization, cartController.hardDeleteCart);
}

const cartRouter = new CartRouter();

export default cartRouter;
