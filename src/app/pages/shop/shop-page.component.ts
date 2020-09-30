import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { GoogleAnalyticsCartService } from '../../shared/services/google-analytics-cart.service';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  title = 'AngularGoogleAnalytics';

  productsInCart: Product[] = [];
  products: Product[] = [];

  constructor(private ps: ProductsService,
    private gacs: GoogleAnalyticsCartService) { }

  ngOnInit() {
    this.ps.getProducts().subscribe(response => {
      this.products = response;
    })
  }

  addToCartFn(product: Product) {
    this.productsInCart.push(product);
    this.gacs.addToChart(product.id);
  }

  removeFromCartFn(product: Product) {
    var index = this.productsInCart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.productsInCart.splice(index, 1);
    }
    this.gacs.removeFromChart(product.id);
  }
}
