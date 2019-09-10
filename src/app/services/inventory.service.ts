import { Inventory} from '../models/inventory'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  
  selectedInventory: Inventory;
  inventories: Inventory[];

  //URL LOCAL
  // readonly URL_API = "http://localhost:3000/api/supplies";

  //URL HEROKU
  readonly URL_API = '/api/supplies';

  constructor(public http: HttpClient) {
    this.selectedInventory = new Inventory();
   }

   getInventories(){
     return this.http.get(this.URL_API)
   }
}


