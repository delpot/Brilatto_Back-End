import User, { IUser } from '../models/User';

export function create(
  firstname: string,
  lastname: string,
  email: string,
  password: string
) {
  return new User({ firstname, lastname, email, password });
}

export async function findByEmail(email: string): Promise<IUser> {
  return User.findOne({ email });
}
