import { Schema, Model, model, Document } from 'mongoose';
import { BaseSchema, IBase } from './BaseEntity';

export interface IAddress {
  addressLine1: string;
  city: string;
  postalCode: number;
  country: string;
  addressLine2?: string;
}

export interface IUser extends IBase, Document {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  isAdmin: boolean;
  dateOfBirth?: Date;
  address?: IAddress;
}

const User: Model<IUser> = model<IUser>(
  'User',
  new Schema({
    ...BaseSchema.obj,
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    address: {
      type: Object,
    },
  })
);

export default User;
