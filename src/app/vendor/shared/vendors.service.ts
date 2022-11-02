import { Injectable } from '@angular/core';
import { Assettypeclass } from './assettypeclass';
import { Vendorclass } from './vendorclass';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  //global variabbles
  formEmpData: Vendorclass = new Vendorclass();

  //list of vendors
  vendors:Vendorclass[];
  assettype:Assettypeclass[];
  constructor( private httpClient: HttpClient) { }

  //1 get all employees
  getAllVendors():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/vendors');
  }
   
   // 2 retrrieve all emplopyees for binding
   bindGetAllVendorsList(){
    this.httpClient.get(environment.apiUrl + '/api/vendors')
    .toPromise()
    .then(
      (response) =>{
        console.log(response);
        this.vendors = response as Vendorclass[]
        
      },
    );
  }

  //3 retrieve all department
  bindGetAllAssets(){
    this.httpClient.get(environment.apiUrl + "/api/assets")
    .toPromise()
    .then(
      (data) =>{
        console.log(data);
        this.assettype = data as Assettypeclass[]
        
      }
    )
  }


  //4 Insert
  insertVendor(vendors:Vendorclass): Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/vendors",vendors);
  }

  
   //5 Update
   updateVendor(vendors:Vendorclass): Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/vendors",vendors);
  }

  //6 delete
  deleteVendor(vdId:any): Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/delete/vdId", vdId);
  }

}
