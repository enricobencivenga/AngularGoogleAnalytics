import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/shared/interfaces/cart-product';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() public addToCart = new EventEmitter<Product>();
  @Output() public removeFromCart = new EventEmitter<Product>();

  constructor() { }

  get cartProducts(): CartProduct[] {
    var productsObj = this.products.reduce(function (cp, p: Product) {
      cp[p.id] = cp[p.id] || { product: p, quantity: 0};
      cp[p.id].quantity = cp[p.id].quantity + 1;
      return cp;  
    }, Object.create(null));
    return Object.values(productsObj);
  }

  ngOnInit() { }

  addToCartFn(product: Product) {
    this.addToCart.emit(product);
  }

  removeFromCartFn(product: Product) {
    this.removeFromCart.emit(product);
  }
}
