import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Appservice';
import { Wallet } from '../model/wallet.model';
import { WindowRefService } from '../service/wallet-service-window';
import { WalletServiceService } from '../service/wallet-service.service';

declare var paymentStart:any;

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {

  showBal: boolean;
  balance:number;
  walletList:Wallet[];
  price:number;
  amount:number;
  wid:number;

  constructor(private http:HttpClient,private wService: WalletServiceService, private appService: AppService,private winRef: WindowRefService) { 
    this.showBal=false;
    this.balance=0;
    this.walletList=[];
    this.price=0;
    this.amount=1000;
    this.wid=appService.walletId.value;
  }

  ngOnInit(): void {
  }

  pay(){
    
    paymentStart(1000);
  }

  activateWalletByUserid(){
    console.log("Activate");
    this.wService.activateWallet(this.appService.walletId.value).subscribe(data=>{
      console.log(data);
    });
  }

  checkBalanceByUserid(){
    this.showBal=!this.showBal;
    this.wService.getBalance(1).subscribe(data=>{
      console.log(data);
      this.balance=data;
    });
    console.log("Check B");
  }

  showAllWallets=()=>{
    console.log("Show All");
  }

  updateByUserid(){
    console.log("Update");
  }

  statementByUserid(){
    console.log("statement1");
    this.wService.getStatementByWalletId(this.appService.walletId.value).subscribe(data=>{
      console.log(data);
    });
  }

  statements(){
    console.log("statement");
    this.wService.showAllStatements().subscribe(data=>{
      console.log(data);
      this.walletList=data
    });
  }

  deactivateWalletByUserid(){
    console.log("deactivate");
    this.wService.deactivateWallet(this.appService.walletId.value).subscribe(data=>{
      console.log(data);
    });
  }

  useWalletMoney(){
    console.log("useWalletMoney");
    this.wService.useWalletMoney(0).subscribe(data=>{
      console.log(data);
      this.price=data;
    });
  }










  createRzpayOrder() {
    console.log();
    // call api to create order_id
    
    this.payWithRazor(this.http.post("http://localhost:1000/wallet/pay",{amount:1000,info:"order"}));
  }

  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_key',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }









}
