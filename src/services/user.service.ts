import UserRepository from '../repositories/user.repository';

const createUser = (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => UserRepository.create(firstname, lastname, email, password);

const getUserByEmail = (email: string) => UserRepository.findByEmail(email);

export default { createUser, getUserByEmail };
