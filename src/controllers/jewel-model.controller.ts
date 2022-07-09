import { Request, Response } from 'express';
import {
  createJewelModel,
  getModelById,
  getModelByIdAndHardDelete,
  getModelByIdAndSoftDelete,
  getModelByIdAndUpdate,
  getModels,
} from '../services/jewel-model.service';

export async function getAllModels(req: Request, res: Response) {
  return getModels()
    .then((models) => {
      return res.status(200).json(models);
    })
    .catch((error) => res.status(500).json(error));
}

export async function getOneModel(req: Request, res: Response) {
  return getModelById(req.params.id)
    .then((model) => {
      const { password, ...foundModel } = model.toObject();
      return res.status(200).json(foundModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function createModel(req: Request, res: Response) {
  const { categoryId, name, description } = req.body;
  return createJewelModel(categoryId, name, description)
    .save()
    .then((createdModel) => {
      res.status(201).json(createdModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function updateModel(req: Request, res: Response) {
  return getModelByIdAndUpdate(req.params.id, req.body)
    .then((updatedModel) => {
      res.status(201).json(updatedModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function softDeleteModel(req: Request, res: Response) {
  return getModelByIdAndSoftDelete(req.params.id)
    .then((softDeletedModel) => {
      res.status(201).json(softDeletedModel);
    })
    .catch((error) => res.status(500).json(error));
}

export async function hardDeleteModel(req: Request, res: Response) {
  return getModelByIdAndHardDelete(req.params.id)
    .then((deletedModel) => {
      res.status(200).json(deletedModel);
    })
    .catch((error) => res.status(500).json(error));
}
