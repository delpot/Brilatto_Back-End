import { JewelModelDto } from 'src/dtos/jewel-model.dto';
import JewelModel, { IJewelModel } from '../entities/JewelModel';

export function create(categoryId: string, name: string, description?: string) {
  return new JewelModel({ categoryId, name, description });
}

export async function findModels(): Promise<IJewelModel[]> {
  return JewelModel.find({ deletedAt: null }).sort({ _id: -1 });
}

export async function findModelById(id: string): Promise<IJewelModel> {
  return JewelModel.findById(id);
}

export async function findModelByIdAndUpdate(
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

export async function findModelByIdAndSoftDelete(
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

export async function findModelByIdAndHardDelete(id: string): Promise<void> {
  return JewelModel.findByIdAndDelete(id);
}
