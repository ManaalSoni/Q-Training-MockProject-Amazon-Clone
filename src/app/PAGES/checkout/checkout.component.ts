import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.shopping_cart.fetchCart();
    this.shopping_cart.calculateTotal();
  }
}
