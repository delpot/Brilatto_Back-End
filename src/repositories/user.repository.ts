import { UserDto } from 'src/dtos/user.dto';
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

export async function findUserByIdAndUpdate(
  id: string,
  body: UserDto
): Promise<IUser> {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        ...body,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );
}
