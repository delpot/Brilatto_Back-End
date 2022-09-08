import { Schema, Model, model } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';

export interface IJewel extends IBase {
  modelId: string;
  name: string;
  photo1: string;
  photo2: string;
  quantityInStock: number;
  price: number;
  description: string
}

const Jewel: Model<IJewel> = model<IJewel>(
  'Jewel',
  new Schema({
    ...BaseSchema.obj,
    modelId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo1: {
      type: String,
      required: true,
    },
    photo2: {
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
    description: {
      type: String,
      required: true,
    },
  })
);

export default Jewel;
