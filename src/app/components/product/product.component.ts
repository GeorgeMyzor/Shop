import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {
  @Input() product: IProduct;
  isBought: boolean;

  constructor(private cartService: CartService) { }

  onBuy() {
    this.isBought = true;
    this.product.isAvailable = false;
    this.cartService.addToCart(this.product);
  }
}
