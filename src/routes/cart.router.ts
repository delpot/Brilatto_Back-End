import { Router } from 'express';
import cartController from 'src/controllers/cart.controller';
import {
  verifyAdmin,
  verifyAuthorization,
  verifyAuthentication,
} from 'src/middlewares/auth.middleware';

class CartRouter {
  routes = Router()
    .get('/', verifyAdmin, cartController.getAllCarts)
    .get('/:userId', verifyAuthorization, cartController.getUserCart)
    .post('/add', verifyAuthentication, cartController.createCart)
    .put('/:id', verifyAuthorization, cartController.updateCart)
    .delete('/:id', verifyAuthorization, cartController.hardDeleteCart);
}

const cartRouter = new CartRouter();

export default cartRouter;
