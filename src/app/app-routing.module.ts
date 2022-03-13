import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {Show12UserComponent} from "./component/show12-user/show12-user.component";
import {ShowDetailOrderByProviderComponent} from "./component/show-detail-order-by-provider/show-detail-order-by-provider.component";



const routes: Routes = [
  { path: 'show12user', component: Show12UserComponent },
  { path: 'showDetail/:id', component: ShowDetailOrderByProviderComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
