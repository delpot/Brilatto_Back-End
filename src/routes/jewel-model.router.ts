import { Router } from 'express';
import modelController from 'src/controllers/jewel-model.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class ModelRouter {

  routes = Router()
  .get('/', modelController.getAllModels)
  .get('/:id', modelController.getOneModel)
  .post('/add', authMiddleware.verifyAdmin, modelController.createModel)
  .put('/:id', authMiddleware.verifyAdmin, modelController.updateModel)
  .put('/:id/softDelete', authMiddleware.verifyAdmin, modelController.softDeleteModel)
  .delete('/:id', authMiddleware.verifyAdmin, modelController.hardDeleteModel);
}

const modelRouter = new ModelRouter();

export default modelRouter;
