import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Appservice';
import { WalletServiceService } from '../service/wallet-service.service';

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {

  showBal: boolean;

  constructor(private wService: WalletServiceService, private appService: AppService) { 
    this.showBal=false;
  }

  ngOnInit(): void {
  }

  

  activateWalletByUserid(){
    console.log("Activate");
    this.wService.activateWallet(this.appService.userId.value).subscribe(data=>{
      console.log(data);
    });
  }

  checkBalanceByUserid(){
    this.showBal=!this.showBal;
    this.wService.a().subscribe(data=>{
      console.log(data);
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
  }

  statements(){
    console.log("statement");
  }

}
