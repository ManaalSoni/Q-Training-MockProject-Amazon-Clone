import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductsService {

  constructor(private http: HttpClient) { }

  featuredProductsURL = "http://localhost:3000/api/v1/products/featured";

  headers = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem("token")
  });
  options = {headers: this.headers};

  getFeaturedProducts() {
    return this.http.get<any>(this.featuredProductsURL, this.options);
  }
}
