import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CouponsService } from 'src/app/SERVICES/coupons.service';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-coupon',
  templateUrl: './checkout-coupon.component.html',
  styleUrls: ['./checkout-coupon.component.css']
})
export class CheckoutCouponComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, private couponService: CouponsService) { }
  coupons: any[] = []

  ngOnInit(): void {
    this.couponService.getAllCoupons().subscribe(
      res => this.coupons = res.coupons,
      error => console.log(error)
    )
  }
  couponApplied = false
  discount_rate = 0;
  
  applyCoupon() {
    this.shoppingCart.applyCoupon(this.discount_rate);
    this.couponApplied = true;

  }
  reset() {
    this.shoppingCart.calculateTotal();
    this.couponApplied = false;
  }
}
