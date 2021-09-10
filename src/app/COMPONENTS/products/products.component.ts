import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ProductsService } from './../../SERVICES/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products:any[] | undefined;

  constructor(
    private shoppping_cart:ShoppingCartService,
    private productsService:ProductsService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addToCart(p: any){
    this.shoppping_cart.addProduct(p)
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
