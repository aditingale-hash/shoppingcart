import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService{

  loggedIn = new BehaviorSubject<boolean>(false);

  userId = new BehaviorSubject<number>(55);
  walletId = new BehaviorSubject<number>(56);
  pId = new BehaviorSubject<number>(0);
  cId = new BehaviorSubject<number>(0);
  orderId = new BehaviorSubject<number>(0);
  
  pId = new BehaviorSubject<number>(0);
  cId = new BehaviorSubject<number>(0);
  cart_product=new BehaviorSubject([]);
  


}