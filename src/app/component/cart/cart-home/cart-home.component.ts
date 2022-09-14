import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private http:HttpClient,private cService:CartServiceService, private appService: AppService,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
   
  }

  getAllCarts(){
    this.cService.getAllCarts().subscribe(data=>{
      this.cart=data;
      console.log(this.cart);
     }
     
     )
  }

  deleteItem(){
    this.actRoute.params.subscribe(
      params=>{
        this.cService.deleteItem(params.pId)
        .subscribe(data=>{
          //this.cart=data;
        },
        error=>{
         // this.errorMsg='not found'
        }
        );
      }
    )
  }

 

}
