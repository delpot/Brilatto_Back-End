import User from '../models/User';

const create = (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => new User({ firstname, lastname, email, password });

const findByEmail = (email: string) => User.findOne({ email });

export default { create, findByEmail };
