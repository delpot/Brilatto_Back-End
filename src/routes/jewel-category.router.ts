import { Router } from 'express';
import { verifyAdmin } from '../middlewares/auth.middleware';
import {
  createCategory,
  updateCategory,
  softDeleteCategory,
  hardDeleteCategory,
} from '../controllers/jewel-category.controller';

const router = Router();
router.post('/add', verifyAdmin, createCategory);
router.put('/:id', verifyAdmin, updateCategory);
router.put('/:id/softDelete', verifyAdmin, softDeleteCategory);
router.delete('/:id/', verifyAdmin, hardDeleteCategory);

export default router;
