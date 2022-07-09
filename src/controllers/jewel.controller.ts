import { Request, Response } from 'express';
import {
  getJewelById,
  getJewels,
  createJewelEntity,
  getJewelByIdAndUpdate,
  getJewelByIdAndSoftDelete,
  getJewelByIdAndHardDelete,
} from 'src/services/jewel.service';

export async function getAllJewels(req: Request, res: Response) {
  return getJewels()
    .then((jewels) => {
      return res.status(200).json(jewels);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getOneJewel(req: Request, res: Response) {
  return getJewelById(req.params.id)
    .then((jewel) => {
      const { password, ...foundModel } = jewel.toObject();
      return res.status(200).json(foundModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function createJewel(req: Request, res: Response) {
  const { modelId, color, photo, quantityInStock, price } = req.body;
  return createJewelEntity(modelId, color, photo, quantityInStock, price)
    .save()
    .then((createdJewel) => {
      res.status(201).json(createdJewel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateJewel(req: Request, res: Response) {
  return getJewelByIdAndUpdate(req.params.id, req.body)
    .then((updatedModel) => {
      res.status(201).json(updatedModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function softDeleteJewel(req: Request, res: Response) {
  return getJewelByIdAndSoftDelete(req.params.id)
    .then((softDeletedModel) => {
      res.status(201).json(softDeletedModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteJewel(req: Request, res: Response) {
  return getJewelByIdAndHardDelete(req.params.id)
    .then((deletedJewel) => {
      res.status(200).json(deletedJewel);
    })
    .catch((error) => res.status(500).json(error));
}
