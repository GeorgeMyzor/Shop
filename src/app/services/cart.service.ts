import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: IProduct[];
  constructor() {
    this.productsInCart = [];
  }

  getProductsCount(): number {
    return this.productsInCart.length;
  }

  addToCart(product: IProduct) {
    this.productsInCart.push(product);
  }

  getProductsInCart(): IProduct[] {
    return this.productsInCart;
  }
}
