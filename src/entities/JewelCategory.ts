import { Schema, Model, model, Types } from 'mongoose';
import { IBase, BaseSchema } from './BaseEntity';
import { IJewelModel } from './JewelModel';

export interface IJewelCategory extends IBase {
  name: string;
  image: string;
  description?: string;
  models?: IJewelModel[];
}

const JewelCategory: Model<IJewelCategory> = model<IJewelCategory>(
  'JewelCategory',
  new Schema({
    ...BaseSchema.obj,
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    models: [
      {
        type: Types.ObjectId,
        ref: 'JewelModel',
      },
    ],
  })
);

export default JewelCategory;
