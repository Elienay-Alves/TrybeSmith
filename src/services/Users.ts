import { sign } from 'jsonwebtoken';
import UserInterface from '../interfaces/Users';
import * as UsersModel from '../models/Users';

const createToken = (payload: UserInterface): string => {
  const SECRET = 'secretPassword';
  const token = sign(payload, SECRET);

  return token;
};

export const create = async (user : UserInterface) => {
  const id = await UsersModel.create(user);
  const payload = {
    id,
    username: user.username,
    level: user.level,
  } as UserInterface;

  const token = createToken(payload);

  return { token };
};

// export const getAll = () => {
//   const result = UsersModel.getAll();

//   return result;
// };

export default {
  create,
};