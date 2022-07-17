import { IJewel } from 'src/entities/Jewel';

export class CartDto {
  userId: string;
  jewels: IJewel[];
  total: number;
}
