import { Schema, Model, Types } from 'mongoose';
import { BaseEntity, IBase } from './BaseEntity';
import { IJewel } from './Jewel';

export interface ICart extends IBase {
  userId: string;
  jewels: IJewel[];
  total: number;
}

const Cart: Model<ICart> = BaseEntity.discriminator(
  'Cart',
  new Schema({
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
  })
);

export default Cart;
