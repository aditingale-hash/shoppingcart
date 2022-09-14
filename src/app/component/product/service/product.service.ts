import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product-home/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  postProductByCartIDApi:string;
      //  /*
    //  Fetch the data from API
    //  */
    private getProductByCatNameApi: string;
   
    constructor(private http: HttpClient) {
      this.getProductByCatNameApi ='http://localhost:1002/product/category/';
      this.postProductByCartIDApi="http://localhost:1003/cart/saveItem/";
    }
  
    public getProductByCatId(catname:string) : Observable<Product[]>{
   
      return this.http.get<Product[]>(this.getProductByCatNameApi + catname);
    }

    public postProductByCartID(cId:number,pId:number):Observable<Product> {
      return this.http.post<Product>(this.postProductByCartIDApi+2+"/"+8,{});
    }
}
