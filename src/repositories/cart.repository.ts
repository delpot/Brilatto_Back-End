import { CartDto } from 'src/dtos/cart.dto';
import Cart, { ICart } from 'src/entities/Cart';
import { IJewel } from 'src/entities/Jewel';

class CartRepository {

  create(userId: string, jewels: IJewel[], total: number) {
    return new Cart({ userId, jewels, total });
  }
  
  async findCarts(): Promise<ICart[]> {
    return Cart.find({ deletedAt: null }).sort({ _id: -1 });
  }
  
  async findCartByUserId(userId: string): Promise<ICart> {
    return Cart.findOne({ userId });
  }
  
  async findCartByIdAndUpdate(
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
  
  async findCartByIdAndHardDelete(id: string): Promise<void> {
    return Cart.findByIdAndDelete(id);
  }
}

const cartRepository = new CartRepository();

export default cartRepository;