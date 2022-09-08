import { Request, Response } from 'express';
const stripe = require('stripe')(process.env.STRIPE_KEY);

class PaymentController {
  createPayment(req: Request, res: Response) {}
}

const paymentController = new PaymentController();

export default paymentController;
