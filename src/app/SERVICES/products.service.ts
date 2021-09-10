import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  addProductURL = "http://localhost:3000/api/v1/products";
  reviewsURL = "http://localhost:3000/api/v1/reviews/";
  currentProduct = null;

  headers = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem("token")
  });
  options = {headers: this.headers};

  addProduct(data: any) {
    return this.http.post<any>(this.addProductURL, data, this.options);
  }

  setCurrentProduct(data: any){
    this.getProductReviews(data.id).subscribe(
      res => data.reviews = res.reviews,
      error => console.log(error)
    )
    this.currentProduct = data;
  }

  getCurrentPrduct(){
    return this.currentProduct;
  }

  getProductReviews(id: any){
    return this.http.get<any>(this.reviewsURL+id, this.options);
  }

  addReview(id: any, data: any){
    console.log(id);
    this.http.post<any>(this.reviewsURL+id, data, this.options).subscribe(
      res => {
        if(res.success) this.setCurrentProduct(this.currentProduct);
      },
      error => console.log(error)
    );
  }

}