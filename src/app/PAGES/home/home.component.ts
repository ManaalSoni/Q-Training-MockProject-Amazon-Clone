import { Component, OnInit } from '@angular/core';
import { FeaturedProductsService } from 'src/app/SERVICES/featured-products.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] =[];
  
  constructor(private api:FeaturedProductsService) { }

  ngOnInit(): void {
    this.api.getFeaturedProducts().subscribe(
      res => this.items = res.products,
      error => console.log(error)
    )
  }

  // getProducts(){
  //   this.api.getJson().subscribe(resp=>{
  //     this.items = resp
  //   })
  // }

  featuredProducts(){
    console.log(this.api.getFeaturedProducts())
  }


}


