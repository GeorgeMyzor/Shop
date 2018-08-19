import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {
  @Input() product: IProduct;
  @Input() fromCart: boolean;
  @Output() buy: EventEmitter<IProduct> = new EventEmitter();
  isBought: boolean;

  constructor() { }

  onBuy() {
    this.isBought = true;
    this.product.isAvailable = false;

    this.buy.emit(this.product);
  }
}
