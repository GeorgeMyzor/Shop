import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { StockService } from 'src/app/shared/services/stock.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Promise<IProduct[]>;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onEditProduct(product: IProduct): void {
    const link = ['/edit', product.name];
    this.router.navigate(link);
  }

  onBuy(product: IProduct) {
    this.cartService.addToCart(product);
    this.stockService.decreaseStock(product.name);
  }
}
