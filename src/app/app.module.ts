import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './component/navbar/navbar-home/navbar-home.component';
import { ProfileHomeComponent } from './component/profile/profile-home/profile-home.component';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { OrderHomeComponent } from './component/order/order-home/order-home.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { WalletHomeComponent } from './component/wallet/wallet-home/wallet-home.component';
import { FooterHomeComponent } from './component/footer-home/footer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    ProfileHomeComponent,
    CartHomeComponent,
    OrderHomeComponent,
    ProductHomeComponent,
    WalletHomeComponent,
    FooterHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
