import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SetStatusOnOffComponent } from './component/set-status-on-off/set-status-on-off.component';
import {Show12ProviderComponent} from "./component/show12Provider/show12Provider.component";
import {ShowDetailOrderByProviderComponent} from "./component/show-detail-order-by-provider/show-detail-order-by-provider.component";
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileProviderComponent } from './component/profile/profile-provider/profile-provider.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {HttpClient, HttpClientModule} from "@angular/common/http";
// import { UserAccountComponent } from './component/user-account/user-account.component';
import {MatCardModule} from "@angular/material/card";
import { DetailComponent } from './component/detail/detail.component';
import { ModalRentComponent } from './component/modal-rent/modal-rent.component';



export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile-provider', component: ProfileProviderComponent},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  // {path: 'user-account', component: UserAccountComponent},
  {path: 'modal-rent', component: ModalRentComponent},
];
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
    SetStatusOnOffComponent,
    ProfileComponent,
    ProfileProviderComponent,
    // UserAccountComponent,
    ProfileProviderComponent,
    DetailComponent,
    ModalRentComponent
  ],
  imports: [

    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
      MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
