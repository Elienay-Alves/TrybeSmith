import { Router } from 'express';
import ProductsController from '../controllers/Products';

const productRouter = Router();

productRouter.post('/', ProductsController.create);

export default productRouter;