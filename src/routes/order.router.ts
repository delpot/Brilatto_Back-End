import { Router } from 'express';
import orderController from 'src/controllers/order.controller';
import {
  verifyAdmin,
  verifyAuthorization,
  verifyAuthentication,
} from 'src/middlewares/auth.middleware';

class OrderRouter {
  routes = Router()
    .get('/', verifyAdmin, orderController.getAllOrders)
    .get('/:userId', verifyAuthorization, orderController.getUserOrders)
    .post('/add', verifyAuthentication, orderController.createOrder)
    .put('/:id', verifyAdmin, orderController.updateOrder)
    .put('/:id/softDelete', verifyAdmin, orderController.softDeleteOrder)
    .delete('/:id', verifyAdmin, orderController.hardDeleteOrder);
}

const orderRouter = new OrderRouter();

export default orderRouter;
