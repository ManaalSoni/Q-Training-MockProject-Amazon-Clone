import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products:any[] | undefined;

  constructor(private shoppping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(p: any){
    this.shoppping_cart.addProduct(p)
  }

}
