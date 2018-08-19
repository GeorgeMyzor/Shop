import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/cart-item.interface';
import { StockService } from 'src/app/services/stock.service';

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

  constructor(
    private cartService: CartService,
    private stockService: StockService) { }

  onRemoveFromCart(product: ICartItem) {
    this.cartService.removeFromCart(product);
    this.stockService.increaseStock(product.name);
  }

  getProductsInCart(): ICartItem[] {
    return this.cartService.getProductsInCart();
  }
}
