import {
  create,
  findUserByIdAndHardDelete,
  findUserByIdAndSoftDelete,
  findUserByIdAndUpdate,
  findUserById,
  findUserByEmail,
  findUsers,
} from '../repositories/user.repository';
import { IUser } from '../entities/User';
import { UserDto } from '../dtos/user.dto';

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
  userDto: UserDto
): Promise<IUser> {
  return findUserByIdAndUpdate(id, userDto);
}

export async function getUserByIdAndSoftDelete(id: string): Promise<IUser> {
  return findUserByIdAndSoftDelete(id);
}

export async function getUserByIdAndHardDelete(id: string): Promise<void> {
  return findUserByIdAndHardDelete(id);
}
