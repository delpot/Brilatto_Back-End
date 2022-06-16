import { Router } from 'express';
import { verifyAdmin } from '../middlewares/auth.middleware';
import { createCategory } from '../controllers/jewelCategory.controller';

const router = Router();
router.post('/add', verifyAdmin, createCategory);

export default router;
