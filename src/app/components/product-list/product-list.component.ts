import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
