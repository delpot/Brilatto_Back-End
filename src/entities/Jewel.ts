import { Schema, Model, model } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';

export interface IJewel extends IBase {
  modelId: string;
  color: string;
  photo: string;
  quantity: number;
  quantityInStock: number;
  price: number;
}

const Jewel: Model<IJewel> = model<IJewel>(
  'Jewel',
  new Schema({
    ...BaseSchema.obj,
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
    quantity: {
      type: Number,
      default: 0,
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
