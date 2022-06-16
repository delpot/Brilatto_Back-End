import { Router } from 'express';
import { verifyAdmin } from '../middlewares/auth.middleware';
import {
  createCategory,
  updateCategory,
} from '../controllers/jewelCategory.controller';

const router = Router();
router.post('/add', verifyAdmin, createCategory);
router.put('/:id', verifyAdmin, updateCategory);

export default router;
