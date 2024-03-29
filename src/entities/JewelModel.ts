import { Schema, Model, model, Types } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';
import { IJewel } from './Jewel';

export interface IJewelModel extends IBase {
  categoryId: string;
  name: string;
  photo: string;
  description?: string;
  jewels?: IJewel[];
}

const JewelModel: Model<IJewelModel> = model<IJewelModel>(
  'JewelModel',
  new Schema({
    ...BaseSchema.obj,
    categoryId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    jewels: [
      {
        type: Types.ObjectId,
        ref: 'Jewel',
      },
    ],
  })
);

export default JewelModel;
