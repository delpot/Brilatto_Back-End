import { Request, Response } from 'express';
import {
  getOrdersByUserId,
  getOrders,
  createOrderEntity,
  getOrderByIdAndUpdate,
  getOrderByIdAndHardDelete,
  getOrderByIdAndSoftDelete,
} from 'src/services/order.service';

export async function getAllOrders(req: Request, res: Response) {
  return getOrders()
    .then((carts) => {
      return res.status(200).json(carts);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getUserOrders(req: Request, res: Response) {
  return getOrdersByUserId(req.params.userId)
    .then((orders) => {
      return res.status(200).json(orders);
    })
    .catch((error) => res.status(500).json(error));
}

export async function createOrder(req: Request, res: Response) {
  const { userId, jewels, total, shippingAddress, status } = req.body;
  return createOrderEntity(userId, jewels, total, shippingAddress, status)
    .save()
    .then((createdOrder) => {
      res.status(201).json(createdOrder);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateOrder(req: Request, res: Response) {
  return getOrderByIdAndUpdate(req.params.id, req.body)
    .then((updatedOrder) => {
      res.status(201).json(updatedOrder);
    })
    .catch((error) => res.status(500).json(error));
}

export async function softDeleteOrder(req: Request, res: Response) {
  return getOrderByIdAndSoftDelete(req.params.id)
    .then((softDeletedOrder) => {
      res.status(201).json(softDeletedOrder);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteOrder(req: Request, res: Response) {
  return getOrderByIdAndHardDelete(req.params.id)
    .then((deletedOrder) => {
      res.status(200).json(deletedOrder);
    })
    .catch((error) => res.status(500).json(error));
}
