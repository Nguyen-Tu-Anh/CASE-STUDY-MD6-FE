import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {Show12UserComponent} from "./component/show12-user/show12-user.component";
import {DetailsComponent} from "./component/details/details.component";


const routes: Routes = [
  { path: 'show12user', component: Show12UserComponent },
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
