import { Injectable } from '@angular/core';
import {Users} from "../model/Users";

// khai bao bien KEY( tao theo nhu luc test ben BE (http://localhost:8080/signin)
const TOKEN_KEY = 'Token_Key';
// const NAME_KEY = 'Name_Key';
const USERS_KEY = 'Users_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // private roles: Array<string> = [];

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


  public setUsers(users: Users) {
    window.sessionStorage.removeItem(USERS_KEY);
    // @ts-ignore
    window.sessionStorage.setItem(USERS_KEY, users);
  }

  public getUsers(): Users {
    // @ts-ignore
    return window.sessionStorage.getItem(USERS_KEY)
  }
  // public getUsers(): Users {
  //     if(sessionStorage.getItem(TOKEN_KEY)){
  //       JSON.parse(sessionStorage.getItem(USERS_KEY)).forEach(user =>{
  //         this.getUsers().push(user.authority)
  //       })
  //     } return this.getUsers();
  // }

}
