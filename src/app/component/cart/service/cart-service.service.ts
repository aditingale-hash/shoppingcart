import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  activateAPI: string;
   getAllCartApi:string;
   deleteItemApi:string;
  constructor(private http:HttpClient) { 
   
    this.getAllCartApi="http://localhost:1003/cart/allcart";
    this.deleteItemApi="http://localhost:1003/cart/deleteItem/";
  }

 

  public getAllCarts():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.getAllCartApi);
  }
  public deleteItem(pId:number):Observable<Cart[]>{
    return this.http.delete<Cart[]>(this.getAllCartApi+pId);
  }


  

}
