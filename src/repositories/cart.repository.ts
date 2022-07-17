import { CartDto } from 'src/dtos/cart.dto';
import Cart, { ICart } from 'src/entities/Cart';
import { IJewel } from 'src/entities/Jewel';

export function create(userId: string, jewels: IJewel[], total: number) {
  return new Cart({ userId, jewels, total });
}

export async function findCarts(): Promise<ICart[]> {
  return Cart.find({ deletedAt: null }).sort({ _id: -1 });
}

export async function findCartByUserId(userId: string): Promise<ICart> {
  return Cart.findOne({ userId });
}

export async function findCartByIdAndUpdate(
  id: string,
  cartDto: CartDto
): Promise<ICart> {
  return Cart.findByIdAndUpdate(
    id,
    {
      $set: {
        ...cartDto,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findCartByIdAndHardDelete(id: string): Promise<void> {
  return Cart.findByIdAndDelete(id);
}
