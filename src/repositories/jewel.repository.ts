import { JewelDto } from 'src/dtos/jewel.dto';
import Jewel, { IJewel } from 'src/entities/Jewel';

export function create(
  modelId: string,
  color: string,
  photo: string,
  quantityInStock: number,
  price: number
) {
  return new Jewel({ modelId, color, photo, quantityInStock, price });
}

export async function findJewels(): Promise<IJewel[]> {
  return Jewel.find({ deletedAt: null }).sort({ _id: -1 });
}

export async function findJewelById(id: string): Promise<IJewel> {
  return Jewel.findById(id);
}

export async function findJewelByIdAndUpdate(
  id: string,
  jewelDto: JewelDto
): Promise<IJewel> {
  return Jewel.findByIdAndUpdate(
    id,
    {
      $set: {
        ...jewelDto,
        updatedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findJewelByIdAndSoftDelete(id: string): Promise<IJewel> {
  return Jewel.findByIdAndUpdate(
    id,
    {
      $set: {
        deletedAt: new Date(),
      },
    },
    { new: true }
  );
}

export async function findJewelByIdAndHardDelete(id: string): Promise<void> {
  return Jewel.findByIdAndDelete(id);
}
