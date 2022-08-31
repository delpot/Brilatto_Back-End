import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import JewelCategory, { IJewelCategory } from '../entities/JewelCategory';

export function create(name: string, image: string) {
  return new JewelCategory({ name, image });
}

export async function findCategories(): Promise<IJewelCategory[]> {
  return JewelCategory.find({ deletedAt: null });
}

export async function findCategoryById(id: string): Promise<IJewelCategory> {
  return JewelCategory.findById(id);
}

export async function findCategoryByIdAndUpdate(
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

export async function findCategoryByIdAndSoftDelete(
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

export async function findCategoryByIdAndHardDelete(id: string): Promise<void> {
  return JewelCategory.findByIdAndDelete(id);
}
