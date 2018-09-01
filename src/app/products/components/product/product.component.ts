import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/cart/services/cart.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {
  @Input() product: IProduct;
  @Output() buy: EventEmitter<IProduct> = new EventEmitter();
  @Output() editProduct = new EventEmitter<IProduct>();

  isBought: boolean;

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  onBuy() {
    this.isBought = true;

    this.buy.emit(this.product);
  }
}
