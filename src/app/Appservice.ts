import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService{

  loggedIn = new BehaviorSubject<boolean>(false);
  userId = new BehaviorSubject<number>(9);
  walletId = new BehaviorSubject<number>(11);
  cart_product=new BehaviorSubject([]);
  //[] is initial value of cart_product.


}
