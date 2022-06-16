import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import { IJewelCategory } from '../models/JewelCategory';
import {
  create,
  findCategoryByIdAndUpdate,
} from '../repositories/jewelCategory.repository';

export function createJewelCategory(name: string) {
  return create(name);
}

export async function getCategoryByIdAndUpdate(
  id: string,
  jewelCategoryDto: JewelCategoryDto
): Promise<IJewelCategory> {
  return findCategoryByIdAndUpdate(id, jewelCategoryDto);
}
