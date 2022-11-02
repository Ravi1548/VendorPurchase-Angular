import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login-userregistration/login/login.component';
// import { UserRegistrationComponent } from './login-userregistration/user-registration/user-registration.component';
import { VendorentryComponent } from './vendor/vendorentry/vendorentry.component';
import { VendorlistComponent } from './vendor/vendorlist/vendorlist.component';


const routes: Routes = [
  {path: '', redirectTo:'/vendorlist',pathMatch:'full'},
  // {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'vendorlist',component:VendorlistComponent},
  {path: 'vendorentry',component:VendorentryComponent},

  // {path: 'login', component:LoginComponent},
  // {path: 'userRegistration', component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
