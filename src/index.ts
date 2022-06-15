console.clear();
console.log('********* START *********');

import dotenv from 'dotenv-safe';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router';

dotenv.config();
const { APP_LOCALHOST: hostname, APP_PORT: port, APP_DSN: dsn } = process.env;

mongoose
  .connect(dsn)
  .then(() => console.log('Brilatto Database successfully connected!'))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use('/api/auth', router);

app.listen(port, () => {
  console.log(
    `Brilatto Back-End server is running at http://${hostname}:${port}`
  );
});
