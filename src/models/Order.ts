import { Schema, Model } from 'mongoose';
import { BaseEntity } from './BaseEntity';
import { ICart } from './Cart';
import { IAddress } from './User';

interface IOrder extends ICart {
  shippingAddress: IAddress;
  status: string;
}

const Order: Model<IOrder> = BaseEntity.discriminator(
  'Order',
  new Schema({
    shippingAddress: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
  })
);

export default Order;
