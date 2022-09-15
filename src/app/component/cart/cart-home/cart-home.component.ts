import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Appservice';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {
cart:Cart[];
products:Product[];
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

  getProductFromCart(){
    this.actRoute.params.subscribe(
      params=>{
        this.cService.getProductByCartId(params.cid)
        .subscribe(data=>{
          this.products=data;
          console.log(this.products)
        },
        error=>{
          //this.errorMsg='not found'
        }
        );
      }
    )
  }

  deleteItemsByCartId(){
    
        this.cService.deleteItemsByCartId(1)
        .subscribe(data=>{
          this.products=[];

        },
        error=>{
         // this.errorMsg='not found'
        }
        );
      }
    
  }



 


