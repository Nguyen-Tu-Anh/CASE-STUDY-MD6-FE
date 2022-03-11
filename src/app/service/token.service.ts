import { Injectable } from '@angular/core';
import {Users} from "../model/Users";

// khai bao bien KEY( tao theo nhu luc test ben BE (http://localhost:8080/signin)
const TOKEN_KEY = 'Token_Key';
// const NAME_KEY = 'Name_Key';
const USER_KEY = 'Users_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];

  constructor() {
  }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // @ts-ignore
    return window.sessionStorage.getItem(TOKEN_KEY);
  }


  public setUser(user: Users) {
    window.sessionStorage.removeItem(USER_KEY);
    // @ts-ignore
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser(): Users {
    // @ts-ignore
    return window.sessionStorage.getItem(USER_KEY)
  }



  logout() {

  }
}
