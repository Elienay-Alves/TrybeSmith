import { ResultSetHeader } from 'mysql2';
import UserInteface from '../interfaces/Users';
import db from './connection';

export const create = async (user: UserInteface): Promise<number> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?);`;
  const [{ insertId }] = await db
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  return insertId;
};

export default {
  create,
};