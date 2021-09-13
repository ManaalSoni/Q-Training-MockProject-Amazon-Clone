import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartURL = "http://localhost:3000/api/v1/users/cart";
  items: any[] = [];

  headers = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem("token")
  });
  options = {headers: this.headers};

  constructor(private http: HttpClient) { }
  total = 0;

  addToCart = (product: any) => {
    const newCartItem = {
      name: product.name,
      productId: product.id,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    this.http.post<any>(this.cartURL, newCartItem, this.options).subscribe(
      res => {
        if(res.success){
          this.fetchCart();
        }
      },
      error => console.log(error)
    );
  }

  getCart = () => {
    return this.http.get<any>(this.cartURL, this.options);
  }

  fetchCart(){
    this.getCart().subscribe(
      res =>  {
        this.items = res.cart;
        this.calculateTotal();
      },
      error => console.log(error)
    )
  }

  get_shopping_cart_items=()=>{
    return this.items;
  }
  getCartLength =()=>{
    return this.items.length;

  }
  calculateTotal = ()=>{
    this.total =  this.items.reduce((acc: any, item: { price: number; quantity: number; })=> acc+ (item.price * item.quantity), 0)
  }

  removeItem=(p: { productId: any; })=>{
    this.http.delete<any>(this.cartURL+"/"+p.productId, this.options).subscribe(
      res => {
        if(res.success){
          const index = this.items.findIndex((item: { productId: any; })=> item.productId == p.productId);
          if(index>=0){
            this.items.splice(index, 1);
            this.calculateTotal();
          }
        }
      }
    );
  }

  updateQuantity=(p:{productId: String; quantity: number}, quantity: number) => {
    const reqBody = {
      quantity
    };
    this.http.put<any>(this.cartURL+"/"+p.productId, reqBody, this.options).subscribe(
      res => {
        if(res.success){
          p.quantity = quantity;
          this.calculateTotal();
        }
      },
      error => console.log(error)
    )
  }

  applyCoupon = (discount_rate: any) => {
    this.total -= this.total * discount_rate / 100;
  }
}
