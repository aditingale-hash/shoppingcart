import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Appservice';
import { ProductService } from '../service/product.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
categoryName: string;
product:Product[]
  constructor(private actRoute: ActivatedRoute, private productService: ProductService,private appService: AppService) { }

  ngOnInit(): void {
    this.productService.getProductByCatId(this.categoryName)
        .subscribe(data=>{
            this.product = data;
        });
  }

  addToCart(){

    //extract the array out of subject

    let productArray=this.appService.cart_product.value;
    //push the product into extracted array;
    //productArray.push(product);
    //update the subject with new value of extracted array

    this.appService.cart_product.next(productArray);

  }


}
