import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ICartItem } from 'src/app/interfaces/cart-item.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styles: []
})
export class CartItemComponent {
  @Input() product: ICartItem;
}
