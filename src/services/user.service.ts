import {
  create,
  findByEmail,
  findUserByIdAndHardDelete,
  findUserByIdAndSoftDelete,
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

export async function getUserByIdAndSoftDelete(id: string): Promise<IUser> {
  return findUserByIdAndSoftDelete(id);
}

export async function getUserByIdAndHardDelete(id: string): Promise<void> {
  return findUserByIdAndHardDelete(id);
}
