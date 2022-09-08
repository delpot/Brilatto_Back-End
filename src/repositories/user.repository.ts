import { UserDto } from '../dtos/user.dto';
import User, { IAddress, IUser } from '../entities/User';

class UserRepository {
  create(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    address: IAddress
  ) {
    return new User({
      firstname,
      lastname,
      email,
      password,
      dateOfBirth,
      address,
    });
  }

  async findUsers(): Promise<IUser[]> {
    return User.find({ deletedAt: null }).sort({ _id: -1 });
  }

  async findUserById(id: string): Promise<IUser> {
    return User.findById(id);
  }

  async findUserByEmail(email: string): Promise<IUser> {
    return User.findOne({ email });
  }

  async findUserByIdAndUpdate(id: string, userDto: UserDto): Promise<IUser> {
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

  async findUserByIdAndSoftDelete(id: string): Promise<IUser> {
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

  async findUserByIdAndHardDelete(id: string): Promise<void> {
    return User.findByIdAndDelete(id);
  }
}

const userRepository = new UserRepository();

export default userRepository;
