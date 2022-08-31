console.clear();
console.log('********* START *********');

import dotenv from 'dotenv-safe';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.router';
import userRouter from './routes/user.router';
import categoryRouter from './routes/jewel-category.router';
import orderRouter from './routes/order.router';
import cors from 'cors';
import modelRouter from './routes/jewel-model.router';
import jewelRouter from './routes/jewel.router';
import cartRouter from './routes/cart.router';

dotenv.config();
const { APP_LOCALHOST: hostname, APP_PORT: port, APP_DSN: dsn } = process.env;

mongoose
  .connect(dsn)
  .then(() => console.log('Brilatto Database successfully connected!'))
  .catch((err) => console.log(err));

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use('/api/auth', authRouter.routes);
app.use('/api/users', userRouter.routes);
app.use('/api/categories', categoryRouter.routes);
app.use('/api/models', modelRouter.routes);
app.use('/api/jewels', jewelRouter.routes);
app.use('/api/carts', cartRouter.routes);
app.use('/api/orders', orderRouter.routes);

app.listen(port, () => {
  console.log(
    `Brilatto Back-End server is running at http://${hostname}:${port}`
  );
});
