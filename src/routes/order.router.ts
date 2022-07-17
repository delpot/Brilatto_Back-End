import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  softDeleteOrder,
  updateOrder,
  hardDeleteOrder,
} from 'src/controllers/order.controller';
import {
  verifyAdmin,
  verifyAuthentication,
  verifyAuthorization,
} from '../middlewares/auth.middleware';

export const ordersRouter = Router()
  .get('/', verifyAdmin, getAllOrders)
  .get('/:userId', verifyAuthorization, getUserOrders)
  .post('/add', verifyAuthentication, createOrder)
  .put('/:id', verifyAdmin, updateOrder)
  .put('/:id/softDelete', verifyAdmin, softDeleteOrder)
  .delete('/:id', verifyAdmin, hardDeleteOrder);
