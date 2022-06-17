import { JewelCategoryDto } from '../dtos/jewel-category.dto';
import { IJewelCategory } from '../models/JewelCategory';
import {
  create,
  findCategoryByIdAndSoftDelete,
  findCategoryByIdAndUpdate,
  findCategoryByIdAndHardDelete,
  findCategories,
  findCategoryById,
} from '../repositories/jewel-category.repository';

export function createJewelCategory(name: string) {
  return create(name);
}

export async function getCategories(): Promise<IJewelCategory[]> {
  return findCategories();
}

export async function getCategoryById(id: string): Promise<IJewelCategory> {
  return findCategoryById(id);
}

export async function getCategoryByIdAndUpdate(
  id: string,
  jewelCategoryDto: JewelCategoryDto
): Promise<IJewelCategory> {
  return findCategoryByIdAndUpdate(id, jewelCategoryDto);
}

export async function getCategoryByIdAndSoftDelete(
  id: string
): Promise<IJewelCategory> {
  return findCategoryByIdAndSoftDelete(id);
}

export async function getCategoryByIdAndHardDelete(id: string): Promise<void> {
  return findCategoryByIdAndHardDelete(id);
}
