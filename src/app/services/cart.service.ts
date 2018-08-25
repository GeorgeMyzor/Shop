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
    let totalCount = 0;

    for (const product of this.productsInCart) {
      totalCount += product.quantity;
    }
    return totalCount;
  }

  addToCart(product: IProduct, quantity?: number) {
    if (!quantity) {
      quantity = 1;
    }

    this.productsInCart.push(this.toCartItem(product, quantity));
  }

  getProductsInCart(): ICartItem[] {
    return this.productsInCart;
  }

  getSpecificProductCount(productName: string): number {
    const product = this.productsInCart.find(p => p.name === productName);
    return product.quantity;
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

  addQuantity(productName: string) {
    const product = this.productsInCart.find(p => p.name === productName);
    product.quantity++;
  }

  removeQuantity(productName: string) {
    const product = this.productsInCart.find(p => p.name === productName);
    product.quantity--;
  }

  private toCartItem(product: IProduct, quantity: number): ICartItem {
    return new CartItemModel(product.name, product.price, quantity);
  }
}
