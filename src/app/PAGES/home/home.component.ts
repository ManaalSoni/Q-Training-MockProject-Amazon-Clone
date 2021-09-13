import { Component, OnInit } from '@angular/core';
import { FeaturedProductsService } from 'src/app/SERVICES/featured-products.service'
import { CategoryProductsService } from './../../SERVICES/category-products.service';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] =[];
  

  constructor(
      private featuredProdsService:FeaturedProductsService,
      private categoryService:CategoryProductsService,
      private cartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    // this.api.getFeaturedProducts().subscribe(
    //   res => this.items = res.products,
    //   error => console.log(error)
    // )
    
    if(localStorage.getItem('categoryId')!='All'){
      this.categoryService.getCategoryProducts(localStorage.getItem('categoryId')).subscribe(
        res => this.items = res.products,
        error => console.log(error)
      )
    }
    else{
      this.featuredProdsService.getFeaturedProducts().subscribe(
        res => this.items = res.products,
        error => console.log(error)
      )
    }
    
    this.cartService.fetchCart()
  }

  // getProducts(){
  //   this.api.getJson().subscribe(resp=>{
  //     this.items = resp
  //   })
  // }

  featuredProducts(){
    console.log(this.featuredProdsService.getFeaturedProducts())
  }


}


