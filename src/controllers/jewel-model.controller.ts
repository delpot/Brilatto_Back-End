import { Request, Response } from 'express';
import  modelService from 'src/services/jewel-model.service';

class ModelController {

  public async getAllModels(req: Request, res: Response) {
    return modelService.getModels()
      .then((models) => {
        return res.status(200).json(models);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async getOneModel(req: Request, res: Response) {
    return modelService.getModelById(req.params.id)
      .then((model) => {
        return res.status(200).json(model.toObject());
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async createModel(req: Request, res: Response) {
    const { categoryId, name, description } = req.body;
    return modelService.createJewelModel(categoryId, name, description)
      .save()
      .then((createdModel) => {
        res.status(201).json(createdModel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async updateModel(req: Request, res: Response) {
    return modelService.getModelByIdAndUpdate(req.params.id, req.body)
      .then((updatedModel) => {
        res.status(201).json(updatedModel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async softDeleteModel(req: Request, res: Response) {
    return modelService.getModelByIdAndSoftDelete(req.params.id)
      .then((softDeletedModel) => {
        res.status(201).json(softDeletedModel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async hardDeleteModel(req: Request, res: Response) {
    return modelService.getModelByIdAndHardDelete(req.params.id)
      .then((deletedModel) => {
        res.status(200).json(deletedModel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
}

const modelController = new ModelController();

export default modelController;