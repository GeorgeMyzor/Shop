import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductModel } from 'src/app/models/product.model';
import { Category } from 'src/app/enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): IProduct[] {
    const products: IProduct[] = [
      new ProductModel('Name1', 'Desc1', 1, Category.Food, true),
      new ProductModel('Name2', 'Desc2', 2, Category.Clothing, true),
      new ProductModel('Name3', 'Desc3', 3, Category.Music, true)
    ];

    return products;
  }
}
