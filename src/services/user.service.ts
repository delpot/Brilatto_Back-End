import { create, findByEmail } from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import { IUser } from 'src/models/User';

async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

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
