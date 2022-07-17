import {
  create,
  findCartByIdAndHardDelete,
  findCartByIdAndUpdate,
  findCartByUserId,
  findCarts,
} from 'src/repositories/cart.repository';
import { CartDto } from 'src/dtos/cart.dto';
import { ICart } from 'src/entities/Cart';
import { IJewel } from 'src/entities/Jewel';

export function createCartEntity(
  userId: string,
  jewels: IJewel[],
  total: number
) {
  return create(userId, jewels, total);
}

export async function getCarts(): Promise<ICart[]> {
  return findCarts();
}

export async function getCartByUserId(userId: string): Promise<ICart> {
  return findCartByUserId(userId);
}

export async function getCartByIdAndUpdate(
  id: string,
  cartDto: CartDto
): Promise<ICart> {
  return findCartByIdAndUpdate(id, cartDto);
}

export async function getCartByIdAndHardDelete(id: string): Promise<void> {
  return findCartByIdAndHardDelete(id);
}
