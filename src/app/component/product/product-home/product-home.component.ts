import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private actRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductByCatId(this.categoryName)
        .subscribe(data=>{
            this.product = data;
        });
  }

}
