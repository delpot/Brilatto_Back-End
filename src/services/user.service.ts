import { IAddress, IUser } from '../entities/User';
import { UserDto } from '../dtos/user.dto';
import userRepository from 'src/repositories/user.repository';

class UserService {
  createUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    address: IAddress
  ) {
    return userRepository.create(
      firstname,
      lastname,
      email,
      password,
      dateOfBirth,
      address
    );
  }

  async getUsers(): Promise<IUser[]> {
    return userRepository.findUsers();
  }

  async getUserById(id: string): Promise<IUser> {
    return userRepository.findUserById(id);
  }

  async getUserByEmail(email: string): Promise<IUser> {
    return userRepository.findUserByEmail(email);
  }

  async getUserByIdAndUpdate(id: string, userDto: UserDto): Promise<IUser> {
    return userRepository.findUserByIdAndUpdate(id, userDto);
  }

  async getUserByIdAndSoftDelete(id: string): Promise<IUser> {
    return userRepository.findUserByIdAndSoftDelete(id);
  }

  async getUserByIdAndHardDelete(id: string): Promise<void> {
    return userRepository.findUserByIdAndHardDelete(id);
  }
}

const userService = new UserService();

export default userService;
