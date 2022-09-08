import { Router } from 'express';
import categoryController from 'src/controllers/jewel-category.controller';
import { verifyAdmin } from 'src/middlewares/auth.middleware';

class CategoryRouter {
  routes = Router()
    .get('/', categoryController.getAllCategories)
    .get('/:id', categoryController.getOneCategory)
    .post('/add', verifyAdmin, categoryController.createCategory)
    .put('/:id', verifyAdmin, categoryController.updateCategory)
    .put('/:id/softDelete', verifyAdmin, categoryController.softDeleteCategory)
    .delete('/:id', verifyAdmin, categoryController.hardDeleteCategory);
}

const categoryRouter = new CategoryRouter();

export default categoryRouter;
