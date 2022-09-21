import OrderInterface from '../interfaces/Orders';
import db from './connection';

export const getAll = async (): Promise<OrderInterface[]> => {
  const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p
  ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId;`;

  const [result] = await db.execute(query);

  return result as OrderInterface[];
};

export default {
  getAll,
};
// aaa