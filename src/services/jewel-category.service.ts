import categoryRepository from 'src/repositories/jewel-category.repository';
import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import { IJewelCategory } from '../entities/JewelCategory';

class CategoryService {

  createJewelCategory(name: string, image: string) {
    return categoryRepository.create(name, image);
  }
  
  async getCategories(): Promise<IJewelCategory[]> {
    return categoryRepository.findCategories();
  }
  
  async getCategoryById(id: string): Promise<IJewelCategory> {
    return categoryRepository.findCategoryById(id);
  }
  
  async getCategoryByIdAndUpdate(
    id: string,
    jewelCategoryDto: JewelCategoryDto
  ): Promise<IJewelCategory> {
    return categoryRepository.findCategoryByIdAndUpdate(id, jewelCategoryDto);
  }
  
  async getCategoryByIdAndSoftDelete(
    id: string
  ): Promise<IJewelCategory> {
    return categoryRepository.findCategoryByIdAndSoftDelete(id);
  }
  
  async getCategoryByIdAndHardDelete(id: string): Promise<void> {
    return categoryRepository.findCategoryByIdAndHardDelete(id);
  }
}

const categoryService = new CategoryService();

export default categoryService;
