import { create, findByEmail } from '../repositories/user.repository';
import { IUser } from 'src/models/User';

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
