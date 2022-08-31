import { Router } from 'express';
import categoryController from 'src/controllers/jewel-category.controller';
import authMiddleware from 'src/middlewares/auth.middleware';

class CategoryRouter {

  routes = Router()
  .get('/', categoryController.getAllCategories)
  .get('/:id', categoryController.getOneCategory)
  .post('/add', authMiddleware.verifyAdmin, categoryController.createCategory)
  .put('/:id', authMiddleware.verifyAdmin, categoryController.updateCategory)
  .put('/:id/softDelete', authMiddleware.verifyAdmin, categoryController.softDeleteCategory)
  .delete('/:id', authMiddleware.verifyAdmin, categoryController.hardDeleteCategory);

}

const categoryRouter = new CategoryRouter();

export default categoryRouter;