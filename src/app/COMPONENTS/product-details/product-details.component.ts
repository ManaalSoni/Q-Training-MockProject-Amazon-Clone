import { ProductsService } from './../../SERVICES/products.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    private productsService: ProductsService
  ) { }

  item: any = null;
  reviews: any[] = [];
  rate = 0;
  text = "";

  ngOnInit(): void {
    this.item = this.productsService.getCurrentPrduct();
  }

  closeModal(){
    this.dialogRef.close();
  }

  addReview(id:any){
    if(this.rate==0 || this.text.trim()==""){
      alert("Invalid");
      return;
    }
    const newReview = {
      rating: this.rate,
      text: this.text
    };
    this.productsService.addReview(id, newReview);
  }

}
