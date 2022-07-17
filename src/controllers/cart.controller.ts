import { Request, Response } from 'express';
import {
  createCartEntity,
  getCartByUserId,
  getCartByIdAndHardDelete,
  getCartByIdAndUpdate,
  getCarts,
} from 'src/services/cart.service';

export async function getAllCarts(req: Request, res: Response) {
  return getCarts()
    .then((carts) => {
      return res.status(200).json(carts);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getUserCart(req: Request, res: Response) {
  return getCartByUserId(req.params.userId)
    .then((cart) => {
      return res.status(200).json(cart.toObject());
    })
    .catch((error) => res.status(500).json(error));
}

export async function createCart(req: Request, res: Response) {
  const { userId, jewels, total } = req.body;
  return createCartEntity(userId, jewels, total)
    .save()
    .then((createdCart) => {
      res.status(201).json(createdCart);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateCart(req: Request, res: Response) {
  return getCartByIdAndUpdate(req.params.id, req.body)
    .then((updatedCart) => {
      res.status(201).json(updatedCart);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteCart(req: Request, res: Response) {
  return getCartByIdAndHardDelete(req.params.id)
    .then((deletedCart) => {
      res.status(200).json(deletedCart);
    })
    .catch((error) => res.status(500).json(error));
}
