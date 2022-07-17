import { Router } from 'express';
import {
  verifyAdmin,
  verifyAuthentication,
  verifyAuthorization,
} from '../middlewares/auth.middleware';

export const ordersRouter = Router()
  .get('/', verifyAdmin)
  .get('/:userId', verifyAuthorization)
  .post('/add', verifyAuthentication)
  .put('/:id', verifyAdmin)
  .put('/:id/softDelete', verifyAdmin)
  .delete('/:id', verifyAdmin);
