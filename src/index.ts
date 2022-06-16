console.clear();
console.log('********* START *********');

import dotenv from 'dotenv-safe';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.router';
import usersRouter from './routes/user.router';
import categoriesRouter from './routes/jewel-category.router';

dotenv.config();
const { APP_LOCALHOST: hostname, APP_PORT: port, APP_DSN: dsn } = process.env;

mongoose
  .connect(dsn)
  .then(() => console.log('Brilatto Database successfully connected!'))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);

app.listen(port, () => {
  console.log(
    `Brilatto Back-End server is running at http://${hostname}:${port}`
  );
});
