import { Injectable } from '@angular/core';

// khai bao bien KEY( tao theo nhu luc test ben BE (http://localhost:8080/signin)
const TOKEN_KEY = 'Token_Key';
// const NAME_KEY = 'Name_Key';
const USERS_KEY = 'Users_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // khai bao user kieu mang?


  constructor() {
  }

  //lay geter/seter cua bien
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // @ts-ignore
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsers(username: string | undefined) {
    window.sessionStorage.removeItem(USERS_KEY);
    if (typeof username === "string") {
      window.sessionStorage.setItem(USERS_KEY, username)
    }
  }

  public getUsers(): any{
    return window.sessionStorage.getItem(USERS_KEY)
  }

  // ham LogOut chay ve profile
  public logOut(){
    window.sessionStorage.clear()
    window.location.reload();
  }
}
