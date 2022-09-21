import { Router } from 'express';
import * as OrdersController from '../controllers/Orders';

const ordersRouter = Router();

ordersRouter.get('/', OrdersController.getAll);

export default ordersRouter;