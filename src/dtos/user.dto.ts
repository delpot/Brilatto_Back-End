import { IAddress } from "src/entities/User";

export class UserDto {
  lastname?: string;
  firstname?: string;
  email?: string;
  dateOfBirth?: Date;
  address?: IAddress
}
