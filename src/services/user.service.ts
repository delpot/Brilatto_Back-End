import {
  create,
  findByEmail,
  findUserByIdAndUpdate,
} from '../repositories/user.repository';
import { IUser } from 'src/models/User';
import { UserDto } from 'src/dtos/user.dto';

export function createUser(
  firstname: string,
  lastname: string,
  email: string,
  password: string
) {
  return create(firstname, lastname, email, password);
}

export async function getUserByEmail(email: string): Promise<IUser> {
  return findByEmail(email);
}

export async function getUserByIdAndUpdate(
  id: string,
  body: UserDto
): Promise<IUser> {
  return findUserByIdAndUpdate(id, body);
}
