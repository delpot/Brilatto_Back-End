import { Schema, Model, model, Types } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';
import { IJewel } from './Jewel';

export interface ICart extends IBase {
  userId: string;
  jewels: IJewel[];
  total: number;
}

export const CartSchema = new Schema({
  ...BaseSchema.obj,
  userId: {
    type: String,
    required: true,
  },
  jewels: [
    {
      type: Types.ObjectId,
      ref: 'Jewel',
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

const Cart: Model<ICart> = model<ICart>('Cart', CartSchema);

export default Cart;
