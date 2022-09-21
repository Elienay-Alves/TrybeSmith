import { ResultSetHeader } from 'mysql2';
import ProductInterface from '../interfaces/index';
import db from './connection';

export const create = async (product: ProductInterface): Promise<number> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
  VALUES (?, ?);`;
  const [{ insertId }] = await db.execute<ResultSetHeader>(query, [name, amount]);

  return insertId;
};

export default {
  create,
};