import { JewelDto } from 'src/dtos/jewel.dto';
import Jewel, { IJewel } from 'src/entities/Jewel';

class JewelRepository {
  create(
    modelId: string,
    name: string,
    photo1: string,
    photo2: string,
    quantityInStock: number,
    price: number,
    description: string
  ) {
    return new Jewel({
      modelId,
      name,
      photo1,
      photo2,
      quantityInStock,
      price,
      description,
    });
  }

  async findJewels(): Promise<IJewel[]> {
    return Jewel.find({ deletedAt: null }).sort({ _id: -1 });
  }

  async findJewelsByModelId(modelId: string): Promise<IJewel[]> {
    return Jewel.find({ deletedAt: null, modelId });
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
