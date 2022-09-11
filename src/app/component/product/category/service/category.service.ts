import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product-home/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getProductByCatNameApi: string;
   
  constructor(private http: HttpClient) {
    this.getProductByCatNameApi ='http://localhost:1002/product/category/';
  }

  public getProductByCatId(catname:string) : Observable<Product[]>{
 
    return this.http.get<Product[]>(this.getProductByCatNameApi + catname);
  }
}
