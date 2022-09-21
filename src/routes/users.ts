import { Router } from 'express';
import * as UsersController from '../controllers/Users';

const UsersRouter = Router();

UsersRouter.post('/', UsersController.create);

export default UsersRouter;