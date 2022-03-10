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
import {MatPaginatorModule} from "@angular/material/paginator";
import { SetStatusOnOffComponent } from './component/set-status-on-off/set-status-on-off.component';
import {Show12ProviderComponent} from "./component/show12Provider/show12Provider.component";
import {ShowDetailOrderByProviderComponent} from "./component/show-detail-order-by-provider/show-detail-order-by-provider.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    Show12ProviderComponent,
    ShowDetailOrderByProviderComponent,
    SetStatusOnOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
