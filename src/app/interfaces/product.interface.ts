import { Category } from 'src/app/enums/category.enum';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
