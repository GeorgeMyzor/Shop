import { Component, OnInit } from '@angular/core';
import { Params, Route, ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  templateUrl: './product-feedback.component.html',
})
export class ProductFeedbackComponent implements OnInit {
  feedbacks: string[];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((params: Params) => this.productsService.getProduct(params.get('productName'))))
    .subscribe(
      product => this.feedbacks = product.feedbacks,
      err => console.log(err)
    );
  }
}
