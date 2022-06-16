import { Request, Response } from 'express';
import {
  createJewelCategory,
  getCategoryByIdAndUpdate,
} from '../services/jewel-category.service';

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
