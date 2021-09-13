import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetUserService } from 'src/app/SERVICES/get-user.service';

@Component({
  selector: 'app-account-type-modal',
  templateUrl: './account-type-modal.component.html',
  styleUrls: ['./account-type-modal.component.css']
})
export class AccountTypeModalComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth,
     private router: Router,
      public dialogRef: MatDialogRef<AccountTypeModalComponent>,
      public getUserService : GetUserService,
      private fb: FormBuilder) { }

  data = {
    'userType':'',
    'fullName':''
  };

  userTypeForm = this.fb.group({
    customer: [true, [Validators.required]],
    seller: [false, [Validators.required]],
  })

  ngOnInit(): void {
    const email = localStorage.getItem("email")
    this.getUserService.getUserByEmail(email).subscribe(
      res => {this.data = res.user
        // console.log(this.data)
      },
      error => console.log(error)
    )
  }

  logout() {
    try {
      this.fireAuth.signOut().then(() => {
        console.log("Logout successful");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("shopping_cart");
        localStorage.removeItem("categoryId");
        this.router.navigate(['/signin']);
      })
    } catch (error) {
      console.log(error);
      
    }
    this.closeModal()
  }
  closeModal(){
    this.dialogRef.close();
  }

  changeUserType(){
    if(this.userTypeForm.value.customer || this.userTypeForm.value.seller){
      var userType = []
      if (this.userTypeForm.value.customer) userType.push("customer");
      if (this.userTypeForm.value.seller) userType.push("seller");
      try {
        this.getUserService.updateUserType({userType}).subscribe(
          res => {
            this.closeModal();
            window.location.reload();
          }
          ,
          error => console.log(error)
        )
      } catch (error) {
        console.log(error)
      }
    }

    else{
      alert("Select atleast 1 type")
    }
}
}