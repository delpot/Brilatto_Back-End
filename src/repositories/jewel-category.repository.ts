import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import JewelCategory, { IJewelCategory } from '../models/JewelCategory';

export function create(name: string) {
  return new JewelCategory({ name });
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
