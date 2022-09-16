import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Appservice';
import {  ProductserviceService } from '../service/product.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  categoryId: number;
  products: Product[];
  errorMsg:string;
  cid: number;
  productArr:Product;

  constructor(private actRoute: ActivatedRoute, private productService: ProductserviceService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      params=>{
        this.cid = params.cid;
        this.productService.getProductByCatId(params.cid)
        .subscribe(data=>{
            this.products = data;
        },
        error=>{
          this.errorMsg='Error in Loading Products, Please contact Administrator';
        });
      }
    );
  }


 /* addToCart(){
    //extract the array out of subject
    let productArray=this.appService.cart_product.value;
    //push the product into extracted array;
    //productArray.push(product);
    //update the subject with new value of extracted array
    this.appService.cart_product.next(productArray);
  }*/

  productByCartId(){

    this.productService.postProductByCartID(this.appService.cartId.value,this.appService.productId.value).subscribe(data=>{
this.productArr=data;
console.log("1");
console.log(data);
//let productArray=this.appService.cart_product.value;
//this.appService.cart_product.next(productArray);
    })
    
  }





}