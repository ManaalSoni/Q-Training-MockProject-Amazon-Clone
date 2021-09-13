import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ProductsService } from './../../SERVICES/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o/public_api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  @Input() products:any[] | undefined;
  activeSlides!: SlidesOutputData;

  categoryId = localStorage.getItem('categoryId')
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  
  constructor(
    private shoppping_cart:ShoppingCartService,
    private productsService:ProductsService,
    public matDialog: MatDialog
  ) 
  {}

  name = localStorage.getItem("categoryName")!=="undefined" ? localStorage.getItem("categoryName") : "Featured Products"

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1040: {
        items: 5
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

  addToCart(p: any){
    this.shoppping_cart.addToCart(p)
  }

  openProduct(p: any){
    this.productsService.setCurrentProduct(p);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "fit-content";
    dialogConfig.width = "70vw";
    const modalDialog = this.matDialog.open(ProductDetailsComponent, dialogConfig);
  }
  


}
