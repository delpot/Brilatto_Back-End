import { Schema, Model, Document, Types } from 'mongoose';
import { IBase, BaseEntity } from './BaseEntity';

export interface IAddress {
  addressLine1: string;
  city: string;
  postalCode: number;
  country: string;
  addressLine2?: string;
}

interface IUser extends IBase, Document {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  isAdmin: boolean;
  address?: IAddress;
}

const User: Model<IUser> = BaseEntity.discriminator(
  'User',
  new Schema({
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
    address: {
      type: Object,
    },
  })
);

export default User;
