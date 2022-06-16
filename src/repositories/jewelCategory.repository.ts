import JewelCategory from 'src/models/JewelCategory';

export function create(name: string) {
  return new JewelCategory({ name });
}
