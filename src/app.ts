import express from 'express';
import 'express-async-errors';
import productRouter from './routes/products';
import userRouter from './routes/users';
import ordersRouter from './routes/order';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
