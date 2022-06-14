import { Schema, Model, model, Types } from 'mongoose';
import { IBase, BaseSchema } from './BaseEntity';
import { IJewelModel } from './JewelModel';

interface IJewelCategory extends IBase {
  name: string;
  description: string;
  models: IJewelModel[];
}

const JewelCategory: Model<IJewelCategory> = model(
  'JewelCategory',
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
    models: [
      {
        type: Types.ObjectId,
        ref: 'JewelModel',
      },
    ],
  })
);

export default JewelCategory;
