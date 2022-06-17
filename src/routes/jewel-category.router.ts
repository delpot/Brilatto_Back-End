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

const router = Router();
router.get('/', getAllCategories);
router.get('/:id', getOneCategory);
router.post('/add', verifyAdmin, createCategory);
router.put('/:id', verifyAdmin, updateCategory);
router.put('/:id/softDelete', verifyAdmin, softDeleteCategory);
router.delete('/:id/', verifyAdmin, hardDeleteCategory);

export default router;
