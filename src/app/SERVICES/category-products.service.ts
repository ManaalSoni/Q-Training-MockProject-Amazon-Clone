import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  constructor(private http: HttpClient) { }

  categoryProductsURL = "http://localhost:3000/api/v1/products/category";

  headers = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem("token")
  });
  options = {headers: this.headers};

  getCategoryProducts(categoryId: any) {
    return this.http.get<any>(this.categoryProductsURL+'/'+categoryId, this.options);
  }
}
