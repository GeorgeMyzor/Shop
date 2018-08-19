import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ICartItem } from 'src/app/interfaces/cart-item.interface';
import { CartItemModel } from 'src/app/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ICartItem[];

  constructor() {
    this.productsInCart = [];
  }

  getProductsCount(): number {
    return this.productsInCart.length;
  }

  addToCart(product: IProduct) {
    this.productsInCart.push(this.toCartItem(product));
  }

  getProductsInCart(): ICartItem[] {
    return this.productsInCart;
  }

  getProductsPrice(): number {
    let totalPrice = 0;
    const products: ICartItem[] = this.productsInCart;

    for (const product of products) {
      totalPrice += product.price;
    }

    return totalPrice;
  }

  removeFromCart(product: ICartItem) {
    const index: number = this.productsInCart.indexOf(product);
    if (index !== -1) {
        this.productsInCart.splice(index, 1);
    }
  }

  private toCartItem(product: IProduct): ICartItem {
    return new CartItemModel(product.name, product.price, product.shipDate);
  }
}
