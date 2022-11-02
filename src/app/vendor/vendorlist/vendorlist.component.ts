import { Component, OnInit } from '@angular/core';
import { Vendorclass } from '../shared/vendorclass';
import {VendorsService} from '../shared/vendors.service'
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {
   //assign default page
   page: number = 1;

  constructor(public vendorsService:VendorsService) { }

  ngOnInit(): void {
    console.log("welcome");

    //get all vendors
    this.vendorsService.bindGetAllVendorsList();
    console.log(this.vendorsService.vendors);
  }
 
   //subscribe
   getAllVendorsList(){

    //call service method
    console.log(this.vendorsService.getAllVendors().subscribe(
      response => {
        console.log("retrieving from list");
        console.log(response);        
      },
      (error) =>{
        console.log(error);
        
      }
    )
    );
  }

  //Update a Vendor
  updateVendor(vdId:number){
    console.log(vdId);
}

   //populate Vendor form for edit
   populateForm(vendorclass:Vendorclass){
    console.log(vendorclass);
    this.vendorsService.formEmpData = Object.assign({},vendorclass);
    
 }

 
  //delete Employee
  deleteEmployee(vendor:Vendorclass){
    console.log("updating a record...");
    const val = confirm("Do you want to delete this record?")
    if(val){
      vendor.active = false;
    this.vendorsService.updateVendor(vendor).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any) =>{
      console.log(err);
    })
    window.location.reload();
  } 
}


}
