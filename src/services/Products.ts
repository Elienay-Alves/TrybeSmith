import ProductInterface from '../interfaces/Products';
import * as ProductModel from '../models/Products';

export const create = async (name: string, amount: string): Promise<ProductInterface> => {
  const add = { name, amount } as ProductInterface;

  const id = await ProductModel.create(add);
  add.id = id;
  return add;
};

export const getAll = () => {
  const result = ProductModel.getAll();

  return result;
};

export default {
  create,
};