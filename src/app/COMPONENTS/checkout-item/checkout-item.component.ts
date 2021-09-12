import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {

  @Input() p: any;
  quantityUpdated = 0;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.quantityUpdated = this.p.quantity;
  }

  removeItem(){
    this.cartService.removeItem(this.p);
  }

  updateQuantity(){
    this.cartService.updateQuantity(this.p, this.quantityUpdated);
  }
}
