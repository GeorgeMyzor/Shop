import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductModel } from 'src/app/models/product.model';
import { Params } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  product: IProduct;

  constructor(
    private productsService: ProductsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel(null, null, 0, null, false);

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(params.get('productName'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
