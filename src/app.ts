import express from 'express';
import 'express-async-errors';
import productRouter from './routes/products';
import userRouter from './routes/users';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
