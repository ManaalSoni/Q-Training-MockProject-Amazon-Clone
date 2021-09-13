import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriesService } from '../../SERVICES/categories.service';
import { GetUserService } from 'src/app/SERVICES/get-user.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountTypeModalComponent } from '../account-type-modal/account-type-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data = {
    'userType':'',
    'fullName':''
  };
  isSeller = false;
  images: any;
  categories: any[] = [];
  username:any;
  categoryId:any='';


  constructor(private fireAuth: AngularFireAuth, private router: Router,
    public getUserService : GetUserService,public shoppingCart:ShoppingCartService,
    public matDialog: MatDialog, private db: AngularFirestore, private categoriesService: CategoriesService) { }

  async ngOnInit() {
    const email = localStorage.getItem("email")
    this.getUserService.getUserByEmail(email).subscribe(
      res => {this.data = res.user
        // console.log(this.data)
      },
      error => console.log(error)

    )
    
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      wait(1000).then(() => {
    const userType = this.data.userType;
    this.username = this.data.fullName.split(' ')[0];
    this.isSeller = userType.includes('seller')
      
    this.categoriesService.getAllCategories().subscribe(
      res => {this.categories = res.categories
        // console.log(this.categories)
      },
      error => console.log(error)
    );
    // this.categoryProducts.getCategoryProducts(this.categoryId)
  });
}

  onChange(deviceValue:any) {

    console.log(deviceValue);
    const id = deviceValue.split("@")[0];
    const name = deviceValue.split("@")[1]
    localStorage.setItem('categoryId', id)
    localStorage.setItem('categoryName', name)
    window.location.reload()
}

openModal(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.id = "modal-component";
  dialogConfig.height = "fit-content";
  dialogConfig.width = "30vw";
  const modalDialog = this.matDialog.open(AccountTypeModalComponent, dialogConfig);
}

goToHome(){
  localStorage.setItem("categoryId",'All');
  this.router.navigate(["/"])
}

getName(name: any) {
  console.log("clicked");
  
  console.log(name);
  
}

}
