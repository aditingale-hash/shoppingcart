import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product-home/model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

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
