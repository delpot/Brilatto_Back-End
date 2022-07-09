import { IJewel } from 'src/models/Jewel';
import {
  create,
  findJewelById,
  findJewelByIdAndHardDelete,
  findJewelByIdAndSoftDelete,
  findJewelByIdAndUpdate,
  findJewels,
} from 'src/repositories/jewel.repository';
import { JewelDto } from 'src/dtos/jewel.dto';

export function createJewelEntity(
  modelId: string,
  color: string,
  photo: string,
  quantityInStock: number,
  price: number
) {
  return create(modelId, color, photo, quantityInStock, price);
}

export async function getJewels(): Promise<IJewel[]> {
  return findJewels();
}

export async function getJewelById(id: string): Promise<IJewel> {
  return findJewelById(id);
}

export async function getJewelByIdAndUpdate(
  id: string,
  jewelDto: JewelDto
): Promise<IJewel> {
  return findJewelByIdAndUpdate(id, jewelDto);
}

export async function getJewelByIdAndSoftDelete(id: string): Promise<IJewel> {
  return findJewelByIdAndSoftDelete(id);
}

export async function getJewelByIdAndHardDelete(id: string): Promise<void> {
  return findJewelByIdAndHardDelete(id);
}
