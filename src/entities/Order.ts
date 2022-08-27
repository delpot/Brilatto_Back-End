import { Schema, Model, model } from 'mongoose';
import { CartSchema, ICart } from './Cart';
import { IAddress } from './User';

export interface IOrder extends ICart {
  shippingAddress: IAddress;
  status: string;
}

export const Order: Model<IOrder> = model<IOrder>(
  'Order',
  new Schema({
    ...CartSchema.obj,
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
