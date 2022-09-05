import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import JewelCategory, { IJewelCategory } from '../entities/JewelCategory';

class CategoryRepository {

  create(name: string, photo: string, description: string) {
    return new JewelCategory({ name, photo, description });
  }
  
  async findCategories(): Promise<IJewelCategory[]> {
    return JewelCategory.find({ deletedAt: null });
  }
  
  async findCategoryById(id: string): Promise<IJewelCategory> {
    return JewelCategory.findById(id);
  }
  
  async findCategoryByIdAndUpdate(
    id: string,
    jewelCategoryDto: JewelCategoryDto
  ): Promise<IJewelCategory> {
    return JewelCategory.findByIdAndUpdate(
      id,
      {
        $set: {
          ...jewelCategoryDto,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findCategoryByIdAndSoftDelete(
    id: string
  ): Promise<IJewelCategory> {
    return JewelCategory.findByIdAndUpdate(
      id,
      {
        $set: {
          deletedAt: new Date(),
        },
      },
      { new: true }
    );
  }
  
  async findCategoryByIdAndHardDelete(id: string): Promise<void> {
    return JewelCategory.findByIdAndDelete(id);
  }
}

const categoryRepository = new CategoryRepository();

export default categoryRepository;
