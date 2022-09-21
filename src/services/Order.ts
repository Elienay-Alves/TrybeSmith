import * as OrdersModel from '../models/Orders';

export const getAll = () => {
  const result = OrdersModel.getAll();

  return result;
};

export default {
  getAll,
};