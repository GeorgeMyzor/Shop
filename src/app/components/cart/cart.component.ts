import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {
  productsInCart: IProduct[];

  get isEmpty(): boolean {
    return this.cartService.getProductsCount() === 0;
  }

  constructor(private cartService: CartService) { }

  getProductsInCart(): IProduct[] {
    return this.cartService.getProductsInCart();
  }
}
