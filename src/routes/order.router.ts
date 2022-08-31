import { Router } from 'express';
import orderController from 'src/controllers/order.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class OrderRouter {

  routes = Router()
  .get('/', authMiddleware.verifyAdmin, orderController.getAllOrders)
  .get('/:userId', authMiddleware.verifyAuthorization, orderController.getUserOrders)
  .post('/add', authMiddleware.verifyAuthentication, orderController.createOrder)
  .put('/:id', authMiddleware.verifyAdmin, orderController.updateOrder)
  .put('/:id/softDelete', authMiddleware.verifyAdmin, orderController.softDeleteOrder)
  .delete('/:id', authMiddleware.verifyAdmin, orderController.hardDeleteOrder);

}

const orderRouter = new OrderRouter();

export default orderRouter;