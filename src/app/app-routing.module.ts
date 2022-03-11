import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Show12usersComponent} from "./component/show12users/show12users.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  { path: 'show12user', component: Show12usersComponent },
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
