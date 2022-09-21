import { ResultSetHeader } from 'mysql2';
import ProductInterface from '../interfaces/products';
import db from './connection';

export const create = async (product: ProductInterface): Promise<number> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
  VALUES (?, ?);`;
  const [{ insertId }] = await db.execute<ResultSetHeader>(query, [name, amount]);

  return insertId;
};

export const getAll = async (): Promise<ProductInterface[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await db.execute(query);

  return result as ProductInterface[];
};

export default {
  create,
};