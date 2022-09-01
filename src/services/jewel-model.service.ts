import { IJewelModel } from '../entities/JewelModel';
import { JewelModelDto } from '../dtos/jewel-model.dto';
import modelRepository from 'src/repositories/jewel-model.repository';

class ModelService {

  createJewelModel(
    categoryId: string,
    name: string,
    description?: string
  ) {
    return modelRepository.create(categoryId, name, description);
  }
  
  async getModels(): Promise<IJewelModel[]> {
    return  modelRepository.findModels();
  }

  async getModelsByCategoryId(categoryId: string): Promise<IJewelModel[]> {
    return  modelRepository.findModelsByCategoryId(categoryId);
  }
  
  async getModelById(id: string): Promise<IJewelModel> {
    return  modelRepository.findModelById(id);
  }
  
  async getModelByIdAndUpdate(
    id: string,
    jewelModelDto: JewelModelDto
  ): Promise<IJewelModel> {
    return  modelRepository.findModelByIdAndUpdate(id, jewelModelDto);
  }
  
  async getModelByIdAndSoftDelete(
    id: string
  ): Promise<IJewelModel> {
    return  modelRepository.findModelByIdAndSoftDelete(id);
  }
  
  async getModelByIdAndHardDelete(id: string): Promise<void> {
    return  modelRepository.findModelByIdAndHardDelete(id);
  }
}

const modelService = new ModelService();

export default modelService;
