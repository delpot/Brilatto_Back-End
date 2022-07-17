import { IAddress } from 'src/entities/User';
import { CartDto } from './cart.dto';

export class OrderDto extends CartDto {
  shippingAddress: IAddress;
  status: string;
}
