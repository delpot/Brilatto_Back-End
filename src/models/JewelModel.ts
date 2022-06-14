import { Schema, Model, model, Types } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';
import { IJewel } from './Jewel';

export interface IJewelModel extends IBase {
  name: string;
  description: string;
  jewels: IJewel[];
  categoryId: string;
}

const JewelModel: Model<IJewelModel> = model(
  'JewelModel',
  new Schema({
    ...BaseSchema.obj,
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jewels: [
      {
        type: Types.ObjectId,
        ref: 'Jewel',
      },
    ],
    categoryId: {
      type: String,
      required: true,
    },
  })
);

export default JewelModel;
