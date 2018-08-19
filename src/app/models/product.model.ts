import { Category } from 'src/app/enums/category.enum';
import { IProduct } from 'src/app/interfaces/product.interface';

export class ProductModel implements IProduct {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean,
    public shipDate?: Date,
    public publicdiscount?: number,
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
    this.shipDate = shipDate;
    this.publicdiscount = publicdiscount;
  }
}
