import { Request, Response } from 'express';
import UserInterface from '../interfaces/Users';
import * as UserService from '../services/Users';

export const create = async (req: Request, res: Response) => {
  const user = req.body as UserInterface;
  const result = await UserService.create(user);
  return res.status(201).json(result);
};

export default {
  create,
};