import { Schema, Model, model, Document } from 'mongoose';

export interface IBase extends Document {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const BaseSchema = new Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

export const BaseEntity: Model<IBase> = model('BaseEntity', BaseSchema);
