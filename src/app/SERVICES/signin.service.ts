import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  authURL = "http://localhost:3000/api/v1/users/auth";
  auth(data: any) {
    return this.http.post<any>(this.authURL, data);
  }

  // emailURL = "http://localhost:3000/api/v1/users/"
  // headers = new HttpHeaders({
  //   "Authorization": "Bearer " + localStorage.getItem("token")
  // });
  // options = {headers: this.headers};

  // getUserByEmail(){
  //   return this.http.get(this.emailURL, this.options)
  // }
}