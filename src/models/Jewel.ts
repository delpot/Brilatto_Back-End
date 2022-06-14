import { Schema, Model } from 'mongoose';
import { IBase, BaseEntity } from './BaseEntity';

export interface IJewel extends IBase {
  categoryId: string;
  modelId: string;
  color: string;
  photo: string;
  quantityInStock: number;
  price: number;
}

const Jewel: Model<IJewel> = BaseEntity.discriminator(
  'Jewel',
  new Schema({
    categoryId: {
      type: String,
      required: true,
    },
    modelId: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    quantityInStock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  })
);

export default Jewel;
