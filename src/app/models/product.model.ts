import { Category } from 'src/app/enums/category.enum';
import { IProduct } from 'src/app/interfaces/product.interface';

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  categroy: Category;
  isAvailable: boolean;

  constructor(
    name: string,
    description: string,
    price: number,
    category: Category,
    isAvailable: boolean
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.categroy = category;
    this.isAvailable = isAvailable;
  }
}
