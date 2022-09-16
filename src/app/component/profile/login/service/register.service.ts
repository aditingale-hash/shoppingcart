import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userRegister } from '../model/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  RegisterApi:string;
  getalluser:string;
  getWalletIdAPI:string;
  getCartIdAPI:string;

  constructor(private http:HttpClient) {
    this.RegisterApi="http://localhost:1000/user/user";
    this.getalluser="http://localhost:1000/user/user";
    this.getWalletIdAPI="http://localhost:1000/wallet/";
    this.getCartIdAPI="http://localhost:1000/cart/";
  }

  public Register(user:userRegister):Observable<userRegister>{

    return this.http.post<userRegister>(this.RegisterApi,user);
  }
  public getuserApi():Observable<userRegister[]>{
    return this.http.get<userRegister[]>(this.getalluser);
  }

  public getWalletId(uId: number):Observable<number>{
    return this.http.get<number>(this.getWalletIdAPI+uId);
  }

  public getCartId(uId: number):Observable<number>{
    return this.http.get<number>(this.getCartIdAPI+uId);
  }

}
