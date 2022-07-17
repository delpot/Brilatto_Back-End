import { IAddress } from '../entities/User';

export class UserDto {
  lastname?: string;
  firstname?: string;
  email?: string;
  password?: string;
  address?: IAddress;
}
