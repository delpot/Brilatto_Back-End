import { Router } from 'express';
import jewelController from 'src/controllers/jewel.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class JewelRouter {
  routes = Router()
  .get('/', jewelController.getAllJewels)
  .get('/:id', jewelController.getOneJewel)
  .post('/add', authMiddleware.verifyAdmin, jewelController.createJewel)
  .put('/:id', authMiddleware.verifyAdmin, jewelController.updateJewel)
  .put('/:id/softDelete', authMiddleware.verifyAdmin, jewelController.softDeleteJewel)
  .delete('/:id', authMiddleware.verifyAdmin, jewelController.hardDeleteJewel);
}

const jewelRouter = new JewelRouter();

export default jewelRouter;
