import { Request, Response } from 'express';
import cartService from 'src/services/cart.service';

class CartController {

  async getAllCarts(req: Request, res: Response) {
    return cartService.getCarts()
      .then((carts) => {
        return res.status(200).json(carts);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async getUserCart(req: Request, res: Response) {
    return cartService.getCartByUserId(req.params.userId)
      .then((cart) => {
        return res.status(200).json(cart.toObject());
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async createCart(req: Request, res: Response) {
    const { userId, jewels, total } = req.body;
    return cartService.createCartEntity(userId, jewels, total)
      .save()
      .then((createdCart) => {
        res.status(201).json(createdCart);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async updateCart(req: Request, res: Response) {
    return cartService.getCartByIdAndUpdate(req.params.id, req.body)
      .then((updatedCart) => {
        res.status(201).json(updatedCart);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async hardDeleteCart(req: Request, res: Response) {
    return cartService.getCartByIdAndHardDelete(req.params.id)
      .then((deletedCart) => {
        res.status(200).json(deletedCart);
      })
      .catch((error) => res.status(500).json(error));
  }
  
}

const cartController = new CartController();

export default cartController;
