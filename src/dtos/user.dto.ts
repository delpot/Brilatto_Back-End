import { IAddress } from '../models/User';

export class UserDto {
  lastname?: string;
  firstname?: string;
  email?: string;
  password?: string;
  address?: IAddress;
}
