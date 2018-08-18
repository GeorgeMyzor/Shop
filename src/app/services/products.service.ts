import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    const products: IProduct[] = [ new Product('Name1', 'Desc1', 1, Category.Food, true),
    new Product('Name2', 'Desc2', 2, Category.Clothing, true),
    new Product('Name3', 'Desc3', 3, Category.Music, true)];

    return products;
  }
}
