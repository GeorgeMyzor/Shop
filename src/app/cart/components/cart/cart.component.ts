import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { ICartItem } from 'src/app/interfaces/cart-item.interface';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {
  styles = {};

  get productsCount(): number {
    return this.cartService.getProductsCount();
  }

  get productsPrice(): number {
    return this.cartService.getProductsPrice();
  }

  constructor(
    public cartService: CartService,
    public stockService: StockService) { }

  onRemoveFromCart(product: ICartItem) {
    this.cartService.removeFromCart(product);
    this.stockService.increaseStock(product.name);
  }

  onMouseout() {
    this.styles = {'background-color': 'white'};
  }

  getProductsInCart(): ICartItem[] {
    return this.cartService.getProductsInCart();
  }

  changeBackgroundColor() {
    this.styles = {'background-color': 'blue'};
  }

  addOne(product: ICartItem) {
    this.stockService.decreaseStock(product.name);
    this.cartService.addQuantity(product.name);
  }

  removeOne(product: ICartItem) {
    this.stockService.increaseStock(product.name);
    this.cartService.removeQuantity(product.name);
  }

  clearCart() {
    this.cartService.clearCart();
    this.stockService.restoreStock();
  }
}
