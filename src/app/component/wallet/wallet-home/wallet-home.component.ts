import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Appservice';
import { Wallet } from '../model/wallet.model';
import { WindowRefService } from '../service/wallet-service-window';
import { WalletServiceService } from '../service/wallet-service.service';

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showBal: boolean;
  balance:number;
  walletList:Wallet[];
/*
  constructor(private wService: WalletServiceService, private appService: AppService) {

  constructor(private http:HttpClient,private wService: WalletServiceService, private appService: AppService,private winRef: WindowRefService) {

    this.showBal=false;
    this.balance=0;
    this.walletList=[];
  }

  ngOnInit(): void {
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
      this.walletList=data
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










 temp=	{
  url:'/wallet/pay',
  data:JSON.stringify({  amount:  amount, info: 'order_request'}),
  contentType: 'application/json',
  type: 'POST',
  dataType: 'json',
  success:function (a){
    console.log("ankush");
    if (a.status == "created") {
      console.log("ankush");
      let options={
        key: 'rzp_test_5iFl5ItRej5fop',
        amount: a.amount,
        Currency: "INR",
        name: " Smart Contact Manager",
        description: "Donation ",
        image:"https://th.bing.com/th/id/OIP.-fmOZ6VFYz5SnqTSZhEv8wHaE8?pid=ImgDet&w=900&h=600&rs=1",
        order_id: a.id,
        handler:function (a) {
        console. log (a.razorpay_payement_id)
        console. log ( a.razorpay_order_id)
        //console. log (razorpay_signature)
        console.log ( ' payment successful !!')
        alert("congrates !! Payment successful !!")
        },

        prefill: { name: "", email: "", contact: "" },
        notes: { address: "Razorpay Corporate Office"}
        ,
        theme: { color: "#3399cc"}

      };

     // let rzp = new Razorpay(options) ;

      //rzp.on ( "payment.failed", function (response) {
      console. log(response.error. code) ;
      console. log (response.error.description)
      console. log (response. error. source) ;
      console. log(response.error. step) ;
      console. log(response.error. reason ) ;
      console. log ( response. error.metadata.order_id);
      console. log ( response.error.metadata.payment_id);
      alert("Oops payment failed !!");
      });

      rzp.open();

    }

  },
  //invoked wh success
  error:function (error) {
    console.log (error+"erorrrr")
    alert("something went wrong !!"+error)
=======
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
>>>>>>> 59bd2f55e53a451d36736ec608b20839437335e0
  }




*/




}
