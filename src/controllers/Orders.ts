import { Request, Response } from 'express';
import * as OrderService from '../services/Order';

export const getAll = async (req: Request, res: Response) => {
  const result = await OrderService.getAll();

  return res.status(200).json(result);
};

export default {
  getAll,
};