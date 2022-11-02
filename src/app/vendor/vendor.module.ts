import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorentryComponent } from './vendorentry/vendorentry.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [VendorlistComponent, VendorComponent, VendorentryComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[VendorentryComponent,VendorlistComponent]
})
export class VendorModule { }
