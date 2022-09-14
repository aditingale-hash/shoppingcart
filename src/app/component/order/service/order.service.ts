import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Orders } from "../model/order.model";

@Injectable({
    providedIn: 'root'
})

export class OrderService{

    getAllOrderApi: string;

    constructor(private http:HttpClient){
        this.getAllOrderApi = "http://localhost:1004/order"
    }

    // public getOrderById(oid:number):Observable<Orders[]>{
    //     return this.http.get<Orders[]>(this.getOrderApi+oid);
    // }

    public getAllOrders():Observable<Orders[]>{
        return this.http.get<Orders[]>(this.getAllOrderApi);
    }

}