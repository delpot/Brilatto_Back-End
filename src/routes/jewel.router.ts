import { Router } from 'express';
import jewelController from 'src/controllers/jewel.controller';
import { verifyAdmin } from 'src/middlewares/auth.middleware';

class JewelRouter {
  routes = Router()
    .get('/', jewelController.getAllJewels)
    .get('/model/:modelId', jewelController.getAllJewelsByModelId)
    .get('/:id', jewelController.getOneJewel)
    .post('/add', verifyAdmin, jewelController.createJewel)
    .put('/:id', verifyAdmin, jewelController.updateJewel)
    .put('/:id/softDelete', verifyAdmin, jewelController.softDeleteJewel)
    .delete('/:id', verifyAdmin, jewelController.hardDeleteJewel);
}

const jewelRouter = new JewelRouter();

export default jewelRouter;
