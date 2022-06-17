import { Request, Response } from 'express';
import {
  createJewelCategory,
  getCategoryByIdAndHardDelete,
  getCategoryByIdAndSoftDelete,
  getCategoryByIdAndUpdate,
  getCategories,
  getCategoryById,
} from '../services/jewel-category.service';

export async function getAllCategories(req: Request, res: Response) {
  return getCategories()
    .then((categories) => {
      return res.status(200).json(categories);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getOneCategory(req: Request, res: Response) {
  return getCategoryById(req.params.id)
    .then((category) => {
      const { password, ...foundCategory } = category.toObject();
      return res.status(200).json(foundCategory);
    })
    .catch((error) => res.status(500).json(error));
}

export async function createCategory(req: Request, res: Response) {
  return createJewelCategory(req.body.name)
    .save()
    .then((createdCategory) => {
      res.status(201).json(createdCategory);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateCategory(req: Request, res: Response) {
  return getCategoryByIdAndUpdate(req.params.id, req.body)
    .then((updatedCategory) => {
      res.status(201).json(updatedCategory);
    })
    .catch((error) => res.status(500).json(error));
}

export async function softDeleteCategory(req: Request, res: Response) {
  return getCategoryByIdAndSoftDelete(req.params.id)
    .then((softDeletedCategory) => {
      res.status(201).json(softDeletedCategory);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteCategory(req: Request, res: Response) {
  return getCategoryByIdAndHardDelete(req.params.id)
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((error) => res.status(500).json(error));
}
