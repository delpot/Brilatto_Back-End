import { Request, Response } from 'express';
import modelService from 'src/services/jewel-model.service';
import jewelService from 'src/services/jewel.service';

class JewelController {

  async getAllJewels(req: Request, res: Response) {
    return jewelService.getJewels()
      .then((jewels) => {
        return res.status(200).json(jewels);
      })
      .catch((error) => res.status(500).json(error));
  }

  public async getAllJewelsByModelId(req: Request, res: Response) {
    return jewelService.getJewelsByModelId(req.params.modelId)
      .then((jewels) => {
        return res.status(200).json(jewels);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async getOneJewel(req: Request, res: Response) {
    return jewelService.getJewelById(req.params.id)
      .then((jewel) => {
        return res.status(200).json(jewel.toObject());
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async createJewel(req: Request, res: Response) {
    const { modelId, color, photo, quantityInStock, price } = req.body;
    const model = await modelService.getModelById(modelId);
    const createdJewel = jewelService.createJewelEntity(modelId, color, photo, quantityInStock, price);
    await createdJewel
      .save()
      .then((createdJewel) => {
        res.status(201).json(createdJewel);
      })
      .catch((error) => res.status(500).json(error));
    model.jewels.push(createdJewel);
    await model.save();
    return createdJewel;
  }
  
  async updateJewel(req: Request, res: Response) {
    return jewelService.getJewelByIdAndUpdate(req.params.id, req.body)
      .then((updatedJewel) => {
        res.status(201).json(updatedJewel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async softDeleteJewel(req: Request, res: Response) {
    return jewelService.getJewelByIdAndSoftDelete(req.params.id)
      .then((softDeletedJewel) => {
        res.status(201).json(softDeletedJewel);
      })
      .catch((error) => res.status(500).json(error));
  }
  
  async hardDeleteJewel(req: Request, res: Response) {
    return jewelService.getJewelByIdAndHardDelete(req.params.id)
      .then((deletedJewel) => {
        res.status(200).json(deletedJewel);
      })
      .catch((error) => res.status(500).json(error));
  }
}

const jewelController = new JewelController();

export default jewelController;
