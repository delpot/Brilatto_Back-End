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

const router = Router();
router.get('/', getAllJewels);
router.get('/:id', getOneJewel);
router.post('/add', verifyAdmin, createJewel);
router.put('/:id', verifyAdmin, updateJewel);
router.put('/:id/softDelete', verifyAdmin, softDeleteJewel);
router.delete('/:id/', verifyAdmin, hardDeleteJewel);

export default router;
