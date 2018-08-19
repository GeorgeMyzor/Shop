import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from 'src/app/components/cart/cart.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { CartService } from 'src/app/services/cart.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
