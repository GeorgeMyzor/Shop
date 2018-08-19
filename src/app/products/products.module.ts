import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from 'src/app/components/product/product.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from 'src/app/components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [ProductsService],
  exports: [ProductListComponent]
})
export class ProductsModule { }
