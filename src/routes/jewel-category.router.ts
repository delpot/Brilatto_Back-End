import { Router } from 'express';
import { verifyAdmin } from '../middlewares/auth.middleware';
import {
  createCategory,
  updateCategory,
  softDeleteCategory,
  hardDeleteCategory,
  getAllCategories,
  getOneCategory,
} from '../controllers/jewel-category.controller';

export const categoriesRouter = Router()
  .get('/', getAllCategories)
  .get('/:id', getOneCategory)
  .post('/add', verifyAdmin, createCategory)
  .put('/:id', verifyAdmin, updateCategory)
  .put('/:id/softDelete', verifyAdmin, softDeleteCategory)
  .delete('/:id/', verifyAdmin, hardDeleteCategory);
