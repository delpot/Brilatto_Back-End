import {
  create,
  findModelById,
  findModelByIdAndHardDelete,
  findModelByIdAndSoftDelete,
  findModelByIdAndUpdate,
  findModels,
} from '../repositories/jewel-model.repository';
import { IJewelCategory } from '../models/JewelCategory';
import { IJewelModel } from '../models/JewelModel';
import { JewelModelDto } from '../dtos/jewel-model.dto';

export function createJewelModel(
  categoryId: string,
  name: string,
  description?: string
) {
  return create(categoryId, name, description);
}

export async function getModels(): Promise<IJewelCategory[]> {
  return findModels();
}

export async function getModelById(id: string): Promise<IJewelCategory> {
  return findModelById(id);
}

export async function getModelByIdAndUpdate(
  id: string,
  jewelModelDto: JewelModelDto
): Promise<IJewelModel> {
  return findModelByIdAndUpdate(id, jewelModelDto);
}

export async function getModelByIdAndSoftDelete(
  id: string
): Promise<IJewelModel> {
  return findModelByIdAndSoftDelete(id);
}

export async function getModelByIdAndHardDelete(id: string): Promise<void> {
  return findModelByIdAndHardDelete(id);
}
