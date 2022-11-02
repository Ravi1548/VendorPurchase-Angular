import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssetDefinition } from './asset-definition';
import { AssetType } from './asset-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetDefinitionService {

  //Global Variable
  formAssetDefinitionData : AssetDefinition=new AssetDefinition();
   AssetType=new AssetType();

  //List of AssetDefinitions -- Retrieve all Records
  AssetDefinitions : AssetDefinition[]; //All AssetDefinitions
  AssetTypes:AssetType[]; //All AssetTypes

  constructor(private httpClient : HttpClient)
  {

  }

  //Call REST API
  //  1 Get all AssetDefinitions
  getAllAssetDefinitions() : Observable<any>
  {
    //  http://localhost:9095/api/AssetDefinitions
    return this.httpClient.get(environment.apiUrl + "/api/AssetDefinitions");
  }

  //  2 Retrieve all AssetDefinitions for Listing
  bindGetAllAssetDefinitionsList()
  {
    this.httpClient.get(environment.apiUrl + '/api/AssetDefinitions')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.AssetDefinitions = response as AssetDefinition[];
      }
    );
  }
  //3 Get all AssetTypes for binding
  bindGetAllAssetTypes(){
    this.httpClient.get(environment.apiUrl+'/api/AssetTypes')
    .toPromise()
    .then((response) => {
      console.log(response);
      this.AssetTypes = response as AssetType[];
    });
  }

  //4 Insert
  insertAssetDefinition(assetDefinition:AssetDefinition):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/assetDefinitions',assetDefinition);
  }

   //5 Update
   updateAssetDefinition(assetDefinition:AssetDefinition):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/assetDefinitions',assetDefinition);
  }
 //6 Delete
 deleteAssetDefinition(adId:number):Observable<any>{
  return this.httpClient.delete(environment.apiUrl+'/api/assetDefinitions/'+ adId);
}

}
