import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUserURL = "http://localhost:3000/api/v1/users/email/";
  updateUserURL = "http://localhost:3000/api/v1/users/"

  headers = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem("token")
  });
  options = {headers: this.headers};

  getUserByEmail(email:any){
    return this.http.get<any>(this.getUserURL+email, this.options);
  }

  updateUserType(data:any){
    return this.http.put<any>(this.updateUserURL, data, this.options);
  }
}


