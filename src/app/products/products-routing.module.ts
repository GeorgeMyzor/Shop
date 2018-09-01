import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from 'src/app/products/components/product-list/product-list.component';
import { ProductFormComponent } from 'src/app/products/components/product-form/product-form.component';
import { ProductFeedbackComponent } from 'src/app/products/components/product-feedback/product-feedback.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'edit/:productName',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
