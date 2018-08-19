import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stockMap: { [key: string]: number; };

  constructor(private productsService: ProductsService) {
    this.stockMap = {};
    this.stockMap['Name1'] = 1;
    this.stockMap['Name2'] = 2;
    this.stockMap['Name3'] = 3;
  }

  increaseStock(productName: string) {
    this.stockMap[productName]++;

    if (this.stockMap[productName] === 1) {
      const products = this.productsService.getProducts();
      const product = products.find(p => p.name === productName);
      product.isAvailable = true;
    }
  }

  decreaseStock(product: IProduct) {
    this.stockMap[product.name]--;
    if (this.stockMap[product.name] <= 0) {
      product.isAvailable = false;
    }
  }
}
