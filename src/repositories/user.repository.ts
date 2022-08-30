import { UserDto } from '../dtos/user.dto';
import User, { IAddress, IUser } from '../entities/User';

export function create(
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  dateOfBirth: string,
  address: IAddress
) {
  return new User({ firstname, lastname, email, password, dateOfBirth, address });
}

export async function findUsers(): Promise<IUser[]> {
  return User.find({ deletedAt: null }).sort({ _id: -1 });
}

export async function findUserById(id: string): Promise<IUser> {
  return User.findById(id);
}

export async function findUserByEmail(email: string): Promise<IUser> {
  return User.findOne({ email });
}

export async function findUserByIdAndUpdate(
  id: string,
  userDto: UserDto
): Promise<IUser> {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        ...userDto,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findUserByIdAndSoftDelete(id: string): Promise<IUser> {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        deletedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findUserByIdAndHardDelete(id: string): Promise<void> {
  return User.findByIdAndDelete(id);
}
