import { Request, Response } from 'express';
import jewelService from 'src/services/jewel.service';

class JewelController {

  async getAllJewels(req: Request, res: Response) {
    return jewelService.getJewels()
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
    return jewelService.createJewelEntity(modelId, color, photo, quantityInStock, price)
      .save()
      .then((createdJewel) => {
        res.status(201).json(createdJewel);
      })
      .catch((error) => res.status(500).json(error));
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
