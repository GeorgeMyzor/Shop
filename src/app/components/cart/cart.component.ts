import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {
  get productsCount(): number {
    return this.cartService.getProductsCount();
  }

  get productsPrice(): number {
    return this.cartService.getProductsPrice();
  }

  constructor(private cartService: CartService) { }

  onRemoveFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
  }

  getProductsInCart(): IProduct[] {
    return this.cartService.getProductsInCart();
  }
}
