import { Request, Response } from 'express';
import * as productsService from '../services/Products';

export const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const response = await productsService.create(name, amount);
  return res.status(201).json(response);
};

export default {
  create,
};