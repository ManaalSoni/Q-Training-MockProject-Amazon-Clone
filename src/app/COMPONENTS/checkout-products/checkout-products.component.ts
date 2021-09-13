import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  checkout_products: any[] = [];

  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.checkout_products = this.cartService.get_shopping_cart_items();
  }

}
