import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/products/services/products.service';

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
      this.productsService.getProducts().then(function(result) {
        let product = result.find(p => p.name === productName);
        product.isAvailable = true;
      });
    }
  }

  decreaseStock(productName: string) {
    this.stockMap[productName]--;

    if (this.stockMap[productName] === 0) {
      this.productsService.getProducts().then(function(result) {
        let product = result.find(p => p.name === productName);
        product.isAvailable = false;
      });
    }
  }

  getProductQuantity(productName: string): number {
    return this.stockMap[productName];
  }

  restoreStock() {
    this.stockMap['Name1'] = 1;
    this.stockMap['Name2'] = 2;
    this.stockMap['Name3'] = 3;

    this.productsService.getProducts().then(function(result) {
      for (const product of result) {
        product.isAvailable = true;
      }
    });
  }
}
