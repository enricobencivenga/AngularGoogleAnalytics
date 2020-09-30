import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() public addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() { }

  addToCartFn(product: Product) {
    this.addToCart.emit(product);
  }
}
