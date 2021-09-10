import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCouponComponent } from './PAGES/add-coupon/add-coupon.component';
import { AddProductComponent } from './PAGES/add-product/add-product.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SigninComponent } from './PAGES/signin/signin.component';
import { SignupComponent } from './PAGES/signup/signup.component';
import { AuthGuard } from './SERVICES/auth-guard.guard';
import { UserTypeGuard } from './SERVICES/user-type.guard';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'checkout', component:CheckoutComponent, canActivate: [AuthGuard] },
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
  {path: "addCoupon", component: AddCouponComponent, canActivate: [AuthGuard, UserTypeGuard] },
  {path: "addProduct", component: AddProductComponent, canActivate: [AuthGuard, UserTypeGuard] },
  {path: "**", redirectTo: "/"}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
