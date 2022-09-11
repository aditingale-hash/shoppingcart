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
  constructor(private http:HttpClient) { 
   // this.activateAPI="http://localhost:1000/cart/activate/";
    this.getAllCartApi="http://localhost:1003/cart/allcart";
  }

  public activateCart(userId: number): Observable<number>{
    return this.http.put<number>(this.activateAPI+userId, {});
  }

  public getAllCarts():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.getAllCartApi);
  }
}
