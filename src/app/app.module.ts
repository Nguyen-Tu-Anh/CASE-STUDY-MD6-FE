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
import {HomeService} from "./service/home.service";
import {UserService} from "./service/user.service";
import {DetailsComponent} from "./component/details/details.component";
import {FormsModule} from "@angular/forms";

import { ProfileComponent } from './component/profile/profile.component';
import { ProfileProviderComponent } from './component/profile/profile-provider/profile-provider.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
// import { UserAccountComponent } from './component/user-account/user-account.component';
import {MatCardModule} from "@angular/material/card";
import { DetailComponent } from './component/detail/detail.component';
import { ModalRentComponent } from './component/modal-rent/modal-rent.component';
import {MatButtonModule} from "@angular/material/button";


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
    Show12usersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
