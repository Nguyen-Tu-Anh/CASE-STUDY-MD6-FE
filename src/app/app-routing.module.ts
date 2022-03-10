import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {Show12ProviderComponent} from "./component/show12Provider/show12Provider.component";

const routes: Routes = [
  { path: 'show12user', component: Show12ProviderComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
