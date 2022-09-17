import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/Appservice';
import { Address } from '../../order/model/order.model';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-address-home',
  templateUrl: './address-home.component.html',
  styleUrls: ['./address-home.component.css']
})
export class AddressHomeComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;
  fullName:string;
  mobNo:string;
  city:string;
  pincode:number;
  flatNo :number;
  state: string;
  cartId:any = this.appService.cartId;
  cid:number;
  addressArry:Address[];

  constructor(private appService: AppService,private actRoute: ActivatedRoute, private addressService:AddressService) { }

  ngOnInit(): void {

    this.addressService.getAddress().subscribe(data=>{
      this.addressArry=data;
      // this.appService.addressId=
      console.log(data);
    })

    this.actRoute.params.subscribe(params=>{
          this.cid=params.cid;
    })

    this.addressForm = new FormGroup({
      fullName : new FormControl(),
      mobNo : new FormControl(),
      city : new FormControl(),
      pincode : new FormControl(),
      flatNo : new FormControl(),
      state : new FormControl()
    });

  }


  onFormSubmit(){
    this.address={
      cartId:this.cartId,
      fullName:this.addressForm.value.fullName,
      mobileNumber:this.addressForm.value.mobNo,
      city:this.addressForm.value.city,
      pincode:this.addressForm.value.pincode,
      flatNumber:this.addressForm.value.flatNo,
      state:this.addressForm.value.state
    }

    console.log(this.address);
    console.log(this.cid);

    this.addressService.postAddress(this.address,this.cartId).subscribe(data=>{
          this.addressArry.push(data); 
    });

  }
}
