import { Component, OnInit } from '@angular/core';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: IProduct[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private stockService: StockService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(product: IProduct) {
    this.cartService.addToCart(product);
    this.stockService.decreaseStock(product);
  }
}
