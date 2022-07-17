import { Router } from 'express';
import {
  verifyAdmin,
  verifyAuthentication,
  verifyAuthorization,
} from '../middlewares/auth.middleware';

export const cartsRouter = Router()
  .get('/', verifyAdmin)
  .get('/:userId', verifyAuthorization)
  .post('/add', verifyAuthentication)
  .put('/:id', verifyAuthorization)
  .delete('/:id/', verifyAuthorization);
