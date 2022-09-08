import { Request, Response } from 'express';
import orderService from 'src/services/order.service';

class OrderController {
  async getAllOrders(req: Request, res: Response) {
    return orderService
      .getOrders()
      .then((carts) => {
        return res.status(200).json(carts);
      })
      .catch((error) => res.status(500).json(error));
  }

  async getUserOrders(req: Request, res: Response) {
    return orderService
      .getOrdersByUserId(req.params.userId)
      .then((orders) => {
        return res.status(200).json(orders);
      })
      .catch((error) => res.status(500).json(error));
  }

  async createOrder(req: Request, res: Response) {
    const { userId, jewels, total, shippingAddress, status } = req.body;
    return orderService
      .createOrderEntity(userId, jewels, total, shippingAddress, status)
      .save()
      .then((createdOrder) => {
        res.status(201).json(createdOrder);
      })
      .catch((error) => res.status(500).json(error));
  }

  async updateOrder(req: Request, res: Response) {
    return orderService
      .getOrderByIdAndUpdate(req.params.id, req.body)
      .then((updatedOrder) => {
        res.status(201).json(updatedOrder);
      })
      .catch((error) => res.status(500).json(error));
  }

  async softDeleteOrder(req: Request, res: Response) {
    return orderService
      .getOrderByIdAndSoftDelete(req.params.id)
      .then((softDeletedOrder) => {
        res.status(201).json(softDeletedOrder);
      })
      .catch((error) => res.status(500).json(error));
  }

  async hardDeleteOrder(req: Request, res: Response) {
    return orderService
      .getOrderByIdAndHardDelete(req.params.id)
      .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
      })
      .catch((error) => res.status(500).json(error));
  }
}

const orderController = new OrderController();

export default orderController;
