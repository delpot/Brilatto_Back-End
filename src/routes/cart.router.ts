import { Router } from 'express';
import {
  getAllCarts,
  getUserCart,
  createCart,
  updateCart,
  hardDeleteCart,
} from 'src/controllers/cart.controller';
import {
  verifyAdmin,
  verifyAuthentication,
  verifyAuthorization,
} from '../middlewares/auth.middleware';

export const cartsRouter = Router()
  .get('/', verifyAdmin, getAllCarts)
  .get('/:userId', verifyAuthorization, getUserCart)
  .post('/add', verifyAuthentication, createCart)
  .put('/:id', verifyAuthorization, updateCart)
  .delete('/:id', verifyAuthorization, hardDeleteCart);
