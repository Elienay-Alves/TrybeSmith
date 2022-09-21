import { Router } from 'express';
import * as ProductsController from '../controllers/Products';

const productRouter = Router();

productRouter.get('/', ProductsController.getAll);
productRouter.post('/', ProductsController.create);

export default productRouter;