import { Router } from 'express';
import { verifyAdmin } from '../middlewares/auth.middleware';
import {
  createModel,
  updateModel,
  softDeleteModel,
  hardDeleteModel,
  getAllModels,
  getOneModel,
} from '../controllers/jewel-model.controller';

export const modelsRouter = Router()
  .get('/', getAllModels)
  .get('/:id', getOneModel)
  .post('/add', verifyAdmin, createModel)
  .put('/:id', verifyAdmin, updateModel)
  .put('/:id/softDelete', verifyAdmin, softDeleteModel)
  .delete('/:id', verifyAdmin, hardDeleteModel);
