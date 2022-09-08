import { IJewel } from 'src/entities/Jewel';
import { JewelDto } from 'src/dtos/jewel.dto';
import jewelRepository from 'src/repositories/jewel.repository';

class JewelService {
  createJewelEntity(
    modelId: string,
    name: string,
    photo1: string,
    photo2: string,
    quantityInStock: number,
    price: number,
    description: string
  ) {
    return jewelRepository.create(
      modelId,
      name,
      photo1,
      photo2,
      quantityInStock,
      price,
      description
    );
  }

  async getJewels(): Promise<IJewel[]> {
    return jewelRepository.findJewels();
  }

  async getJewelsByModelId(modelId: string): Promise<IJewel[]> {
    return jewelRepository.findJewelsByModelId(modelId);
  }

  async getJewelById(id: string): Promise<IJewel> {
    return jewelRepository.findJewelById(id);
  }

  async getJewelByIdAndUpdate(id: string, jewelDto: JewelDto): Promise<IJewel> {
    return jewelRepository.findJewelByIdAndUpdate(id, jewelDto);
  }

  async getJewelByIdAndSoftDelete(id: string): Promise<IJewel> {
    return jewelRepository.findJewelByIdAndSoftDelete(id);
  }

  async getJewelByIdAndHardDelete(id: string): Promise<void> {
    return jewelRepository.findJewelByIdAndHardDelete(id);
  }
}

const jewelService = new JewelService();

export default jewelService;
