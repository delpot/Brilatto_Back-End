import { CartDto } from 'src/dtos/cart.dto';
import { ICart } from 'src/entities/Cart';
import { IJewel } from 'src/entities/Jewel';
import cartRepository from 'src/repositories/cart.repository';

class CartService {

  createCartEntity(
    userId: string,
    jewels: IJewel[],
    total: number
  ) {
    return cartRepository.create(userId, jewels, total);
  }
  
  async getCarts(): Promise<ICart[]> {
    return cartRepository.findCarts();
  }
  
  async getCartByUserId(userId: string): Promise<ICart> {
    return cartRepository.findCartByUserId(userId);
  }
  
  async getCartByIdAndUpdate(
    id: string,
    cartDto: CartDto
  ): Promise<ICart> {
    return cartRepository.findCartByIdAndUpdate(id, cartDto);
  }
  
  async getCartByIdAndHardDelete(id: string): Promise<void> {
    return cartRepository.findCartByIdAndHardDelete(id);
  }
  
}

const cartService = new CartService();

export default cartService;