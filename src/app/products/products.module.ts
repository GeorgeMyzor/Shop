import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from 'src/app/products/components/product/product.component';
import { ProductListComponent } from 'src/app/products/components/product-list/product-list.component';
import { ProductsService } from 'src/app/products/services/products.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from 'src/app/products/products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductFeedbackComponent
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
