import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from 'src/app/components/cart/cart.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { CartService } from 'src/app/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
