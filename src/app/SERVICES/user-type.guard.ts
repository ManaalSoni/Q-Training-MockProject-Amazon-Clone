import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CanActivate, Router } from '@angular/router';
import { GetUserService } from './get-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
  constructor(private router: Router, private fireAuth: AngularFireAuth, private db: AngularFirestore, private getUser:GetUserService) { }
  data: any[] = [];
  isSeller = false;
  user: any;
  check:any;

  async canActivate() {  
    const email = localStorage.getItem("email")
    this.getUser.getUserByEmail(email).subscribe
    (
      res=> 
      {
        this.user=res.user
        const userType = this.user.userType;
        this.isSeller = userType.includes('seller')
        if(this.isSeller) {
          this.check= true
        }
    
        else{
          this.router.navigate(["/"]);
          this.check = false;
        }
      },
      error => console.log(error)
    )

      const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      const result = await wait(1000).then(() => {
        return this.check
      })
      // console.log(result)
      return this.check
  }
}