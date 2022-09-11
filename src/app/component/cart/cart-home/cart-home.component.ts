import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Appservice';
import { Cart } from '../model/cart.model';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {
cart:Cart[];
  constructor(private http:HttpClient,private cService:CartServiceService, private appService: AppService) { }

  ngOnInit(): void {


   
  }

  getAllCarts(){
    this.cService.getAllCarts().subscribe(data=>{
      this.cart=data;
      console.log(this.cart);
     },
     
     )
  }

}
