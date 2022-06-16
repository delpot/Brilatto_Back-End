import { create } from '../repositories/jewelCategory.repository';

export function createJewelCategory(name: string) {
  return create(name);
}
