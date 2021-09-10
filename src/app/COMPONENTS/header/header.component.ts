import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriesService } from '../../SERVICES/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any[] = [];
  isSeller = false;
  images: any;
  categories: any[] = [];
  username:any;

  constructor(private fireAuth: AngularFireAuth, public shoppingCart:ShoppingCartService, private db: AngularFirestore, private categoriesService: CategoriesService) { }

  async ngOnInit() {
    const email = localStorage.getItem("email")

    const snapshot = await this.db.collection("users").ref.where("email", "==", email).get();
    snapshot.docs.map((doc: any) => {
      this.data.push(doc.data());
    });
    const userType = this.data[0].userType;
    this.username = this.data[0].fullName.split(' ')[0];
    this.isSeller = userType.includes('seller')

    this.categoriesService.getAllCategories().subscribe(
      res => {this.categories = res.categories
        // console.log(this.categories)
      },
      error => console.log(error)
    );
    
  }

  
}
