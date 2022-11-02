import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendorsService } from '../shared/vendors.service';

@Component({
  selector: 'app-vendorentry',
  templateUrl: './vendorentry.component.html',
  styleUrls: ['./vendorentry.component.scss']
})
export class VendorentryComponent implements OnInit {

  constructor(public vendorsService:VendorsService,) { }

  ngOnInit(): void {

    //getall Asset type for dropdwon list
    this.vendorsService.bindGetAllVendorsList()
    this.vendorsService.bindGetAllAssets()
    // const checkb = document.getElementById("isActive") as HTMLInputElement;
    // console.log(checkb?.checked);
    
  }

   //submit
   onSubmit(form:NgForm){
    console.log(form.value);
    //Insert = 0 or Update >=1
    let insertId = this.vendorsService.formEmpData.vdId;

    //checking for Insert or Update
    if(insertId ==0 || insertId ==null){ 
      //insert
      this.insertVendorRecord(form);
    }else{
      //update
      this.updateVendorRecord(form)
    }
    
  }

  //Insert method
  insertVendorRecord(form?:NgForm){
    console.log("Inserting a record");
    console.log(form.value);
    
    this.vendorsService.insertVendor(form.value).subscribe(
      (result) =>{
        console.log(result);
        // this.toastr.success("user record has been inserted","Inserted Successfully")
        window.location.reload();
        
      }
    )
    
  }

  //update method
  updateVendorRecord(form?:NgForm){
    console.log("Updating a record");
    console.log(form.value);
    
    this.vendorsService.updateVendor(form.value).subscribe(
      (result) =>{
        console.log(result);
        // this.toastr.success("user record has been Updated","Updated Successfully")
        window.location.reload();
        
      }
    )
    
  }

   //delete method
   deleteVendorRecord(form?:NgForm){
    console.log("delete a record");
    console.log(form.value);
    
    this.vendorsService.deleteVendor(form.value).subscribe(
      (result) =>{
        console.log(result);
        // this.toastr.success("user record has been deleted","deleted Successfully")
        window.location.reload();
        
      }
    )
    
  }



}
