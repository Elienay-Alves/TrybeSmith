import { Router } from 'express';
import * as UsersController from '../controllers/Users';

const UsersRouter = Router();

// UsersRouter.get('/', UsersController.getAll);
UsersRouter.post('/', UsersController.create);

export default UsersRouter;