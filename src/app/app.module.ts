import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseModule } from './purchase/purchase.module';
import { VendorModule } from './vendor/vendor.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VendorsService } from './vendor/shared/vendors.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PurchaseModule,
    VendorModule,
    HttpClientModule,
    // FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    // ReactiveFormsModule
  ],
  providers: [VendorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
