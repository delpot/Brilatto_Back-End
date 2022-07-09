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

const router = Router();
router.get('/', getAllModels);
router.get('/:id', getOneModel);
router.post('/add', verifyAdmin, createModel);
router.put('/:id', verifyAdmin, updateModel);
router.put('/:id/softDelete', verifyAdmin, softDeleteModel);
router.delete('/:id/', verifyAdmin, hardDeleteModel);

export default router;
