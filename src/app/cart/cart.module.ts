import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component';
import { CartItemComponent } from 'src/app/cart/components/cart-item/cart-item.component';
import { CartService } from 'src/app/cart/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }
