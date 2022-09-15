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




}
