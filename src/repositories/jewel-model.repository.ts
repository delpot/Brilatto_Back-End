import { JewelModelDto } from 'src/dtos/jewel-model.dto';
import JewelModel, { IJewelModel } from '../entities/JewelModel';

class ModelRepository {

  create(categoryId: string, name: string, photo: string, description?: string) {
    return new JewelModel({ categoryId, name, photo, description });
  }
  
  async findModels(): Promise<IJewelModel[]> {
    return JewelModel.find({ deletedAt: null }).sort({ _id: -1 });
  }

  async findModelsByCategoryId(categoryId: string): Promise<IJewelModel[]> {
    return JewelModel.find({ deletedAt: null, categoryId }).sort({ _id: -1 });
  }
  
 async findModelById(id: string): Promise<IJewelModel> {
    return JewelModel.findById(id);
  }
  
  async findModelByIdAndUpdate(
    id: string,
    jewelModelDto: JewelModelDto
  ): Promise<IJewelModel> {
    return JewelModel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...jewelModelDto,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findModelByIdAndSoftDelete(
    id: string
  ): Promise<IJewelModel> {
    return JewelModel.findByIdAndUpdate(
      id,
      {
        $set: {
          deletedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findModelByIdAndHardDelete(id: string): Promise<void> {
    return JewelModel.findByIdAndDelete(id);
  }
}

const modelRepository = new ModelRepository()

export default modelRepository;
