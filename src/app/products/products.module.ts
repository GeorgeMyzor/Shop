import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from 'src/app/products/components/product/product.component';
import { ProductListComponent } from 'src/app/products/components/product-list/product-list.component';
import { ProductsService } from 'src/app/products/services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
