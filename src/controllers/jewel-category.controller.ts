import { Request, Response } from 'express';
import categoryService from 'src/services/jewel-category.service';

class CategoryController {

  async getAllCategories(req: Request, res: Response) {
    return categoryService.getCategories()
      .then((categories) => {
        return res.status(200).json(categories);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async getOneCategory(req: Request, res: Response) {
    return categoryService.getCategoryById(req.params.id)
      .then((category) => {
        return res.status(200).json(category.toObject());
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async createCategory(req: Request, res: Response) {
    const { name, photo, description } = req.body;
    if (
      !name ||
      !photo ||
      !description
    ) {
      return res.status(400).send({ message: '⚠ Missing fields!' });
    }
    return categoryService.createJewelCategory(name, photo, description)
      .save()
      .then((createdCategory) => {
        res.status(201).json(createdCategory);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async updateCategory(req: Request, res: Response) {
    return categoryService.getCategoryByIdAndUpdate(req.params.id, req.body)
      .then((updatedCategory) => {
        res.status(201).json(updatedCategory);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async softDeleteCategory(req: Request, res: Response) {
    return categoryService.getCategoryByIdAndSoftDelete(req.params.id)
      .then((softDeletedCategory) => {
        res.status(201).json(softDeletedCategory);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async hardDeleteCategory(req: Request, res: Response) {
    return categoryService.getCategoryByIdAndHardDelete(req.params.id)
      .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
      })
      .catch((error) => res.status(500).json(error));
  }
  
}

const categoryController = new CategoryController;

export default categoryController;