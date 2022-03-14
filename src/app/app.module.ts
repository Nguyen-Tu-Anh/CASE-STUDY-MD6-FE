import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import { DetailComponent } from './component/detail/detail.component';
import { ModalRentComponent } from './component/modal-rent/modal-rent.component';
import {MatButtonModule} from "@angular/material/button";
import {DetailsComponent} from "./component/details/details.component";
import {ShowUserAndProviderComponent} from "./component/show-user-and-provider/show-user-and-provider.component";
import {ProfileProviderComponent} from "./component/profile/profile-provider/profile-provider.component";


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'profile-provider/:id', component: ProfileProviderComponent},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'modal-rent', component: ModalRentComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'show-user-and-provider', component: ShowUserAndProviderComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ProfileProviderComponent,
    DetailComponent,
    ModalRentComponent,
    DetailsComponent,
    ShowUserAndProviderComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
