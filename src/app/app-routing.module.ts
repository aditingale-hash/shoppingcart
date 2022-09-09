import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { OrderHomeComponent } from './component/order/order-home/order-home.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { ProfileHomeComponent } from './component/profile/profile-home/profile-home.component';
import { WalletHomeComponent } from './component/wallet/wallet-home/wallet-home.component';

const routes: Routes = [
  {path:'', component: ProductHomeComponent},
  {path:'cart', component: CartHomeComponent},
  {path:'order', component: OrderHomeComponent},
  {path:'profile', component: ProfileHomeComponent},
  {path:'wallet', component: WalletHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
