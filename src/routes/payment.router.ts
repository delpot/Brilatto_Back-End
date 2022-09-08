import { Router } from 'express';
import paymentController from 'src/controllers/payment.controller';

class PaymentRouter {
  routes = Router().post('/payment', paymentController.createPayment);
}

const paymentRouter = new PaymentRouter();

export default paymentRouter;
