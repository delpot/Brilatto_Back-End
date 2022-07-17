import { Router } from 'express';
import {
  getAllJewels,
  getOneJewel,
  createJewel,
  updateJewel,
  softDeleteJewel,
  hardDeleteJewel,
} from 'src/controllers/jewel.controller';
import { verifyAdmin } from '../middlewares/auth.middleware';

export const jewelsRouter = Router()
  .get('/', getAllJewels)
  .get('/:id', getOneJewel)
  .post('/add', verifyAdmin, createJewel)
  .put('/:id', verifyAdmin, updateJewel)
  .put('/:id/softDelete', verifyAdmin, softDeleteJewel)
  .delete('/:id', verifyAdmin, hardDeleteJewel);
