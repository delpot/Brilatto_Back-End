import { JewelDto } from 'src/dtos/jewel.dto';
import Jewel, { IJewel } from 'src/entities/Jewel';

class JewelRepository {

  create(
    modelId: string,
    color: string,
    photo: string,
    quantityInStock: number,
    price: number
  ) {
    return new Jewel({ modelId, color, photo, quantityInStock, price });
  }
  
  async findJewels(): Promise<IJewel[]> {
    return Jewel.find({ deletedAt: null }).sort({ _id: -1 });
  }

  async findJewelsByModelId(modelId: string): Promise<IJewel[]> {
    return Jewel.find({ deletedAt: null, modelId }).sort({ _id: -1 });
  }
  
  async findJewelById(id: string): Promise<IJewel> {
    return Jewel.findById(id);
  }
  
  async findJewelByIdAndUpdate(
    id: string,
    jewelDto: JewelDto
  ): Promise<IJewel> {
    return Jewel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...jewelDto,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findJewelByIdAndSoftDelete(id: string): Promise<IJewel> {
    return Jewel.findByIdAndUpdate(
      id,
      {
        $set: {
          deletedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findJewelByIdAndHardDelete(id: string): Promise<void> {
    return Jewel.findByIdAndDelete(id);
  }
  
}

const jewelRepository = new JewelRepository();

export default jewelRepository;