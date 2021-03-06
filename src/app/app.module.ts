import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { CheckoutCouponComponent } from './COMPONENTS/checkout-coupon/checkout-coupon.component';
import { AccountTypeModalComponent } from './COMPONENTS/account-type-modal/account-type-modal.component';
import { SignupComponent } from './PAGES/signup/signup.component';
import { SigninComponent } from './PAGES/signin/signin.component';
import { AddCouponComponent } from './PAGES/add-coupon/add-coupon.component';
import { AddProductComponent } from './PAGES/add-product/add-product.component';
import { ProductDetailsComponent } from './COMPONENTS/product-details/product-details.component';
import { CheckoutItemComponent } from './COMPONENTS/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    CheckoutCouponComponent,
    AccountTypeModalComponent,
    SignupComponent,
    SigninComponent,
    AddCouponComponent,
    AddProductComponent,
    ProductDetailsComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    MDBBootstrapModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
