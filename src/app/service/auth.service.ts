import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignUpForm} from "../component/model/SignUpForm";
import {Observable, ObservableInputTuple} from "rxjs";
import {JwtResponse} from "../component/model/JwtResponse";
import {SignInForm} from "../component/model/SignInForm";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //API LOCAL
  private API_SIGNUP = environment.API_LOCAL +'signup';
   data: boolean | undefined;
  constructor(private http:HttpClient) { }
  signUp(signUp : SignUpForm) : Observable<any>{
    return this.http.post<any>(this.API_SIGNUP,signUp);
    //truyen doi tuong nay vao Service
  }
  private API_SIGNIN = environment.API_LOCAL +'signin';
  signIn(signIn : SignInForm) : Observable<any>{
    return this.http.post<JwtResponse>(this.API_SIGNIN,signIn);
    // Tao ham nay ben Service, truy xuat ra ben componment,
    // hung ra du lieu JWTReponse nhu ben BE
  }

  setData(data: boolean | undefined){
    this.data = data;
  }
  getData(): boolean{
    return <boolean>this.data;
  }
}
