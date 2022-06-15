import {
  create,
  findUserByIdAndHardDelete,
  findUserByIdAndSoftDelete,
  findUserByIdAndUpdate,
  findUserById,
  findUserByEmail,
  findUsers,
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

export async function getUsers(): Promise<IUser[]> {
  return findUsers();
}

export async function getUserById(id: string): Promise<IUser> {
  return findUserById(id);
}

export async function getUserByEmail(email: string): Promise<IUser> {
  return findUserByEmail(email);
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
