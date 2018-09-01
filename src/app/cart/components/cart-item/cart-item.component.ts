import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ICartItem } from 'src/app/interfaces/cart-item.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() product: ICartItem;
}
