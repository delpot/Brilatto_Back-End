import { Router } from 'express';
import modelController from 'src/controllers/jewel-model.controller';
import { verifyAdmin } from 'src/middlewares/auth.middleware';

class ModelRouter {
  routes = Router()
    .get('/', modelController.getAllModels)
    .get('/category/:categoryId', modelController.getAllModelsByCategoryId)
    .get('/:id', modelController.getOneModel)
    .post('/add', verifyAdmin, modelController.createModel)
    .put('/:id', verifyAdmin, modelController.updateModel)
    .put('/:id/softDelete', verifyAdmin, modelController.softDeleteModel)
    .delete('/:id', verifyAdmin, modelController.hardDeleteModel);
}

const modelRouter = new ModelRouter();

export default modelRouter;
