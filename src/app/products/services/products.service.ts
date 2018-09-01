import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductModel } from 'src/app/models/product.model';
import { Category } from 'src/app/enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProduct[] = [
    new ProductModel('Name1', 'Desc1', 1, Category.Food, true, undefined, undefined, ['Feedback 1', 'Feedback 2' , 'Feedback 3']),
    new ProductModel('Name2', 'Desc2', 5, Category.Clothing, true, undefined, undefined, ['Feedback 3', 'Feedback 4' , 'Feedback 5']),
    new ProductModel('Name3', 'Desc3', 3, Category.Music, true, undefined, undefined, ['Feedback 6', 'Feedback 7' , 'Feedback 8'])
  ];

  getProducts(): Promise<IProduct[]> {
    return new Promise(resolve => {
      resolve(this.products);
    });
  }

  getProduct(name: string): Promise<IProduct> {
    return this.getProducts()
      .then(products => products.find(product => product.name === name))
      .catch(() => Promise.reject('Error in getProduct method'));
  }
}
