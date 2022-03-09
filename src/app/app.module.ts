import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {RegisterComponent} from "./component/register/register.component";
import {Show12usersComponent} from "./component/show12users/show12users.component";
import { ShowAllBillProviderComponent } from './component/show-all-bill-provider/show-all-bill-provider.component';
import {MatPaginatorModule} from "@angular/material/paginator";


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    Show12usersComponent,
    ShowAllBillProviderComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, HttpClientModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
