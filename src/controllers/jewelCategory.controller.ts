import { Request, Response } from 'express';
import { createJewelCategory } from '../services/jewelCategory.service';

export async function createCategory(req: Request, res: Response) {
  return createJewelCategory(req.body.name)
    .save()
    .then((createdCategory) => {
      res.status(201).json(createdCategory);
    })
    .catch((error) => res.status(500).json(error));
}
