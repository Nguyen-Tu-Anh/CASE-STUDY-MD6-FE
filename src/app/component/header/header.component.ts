import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// @ts-ignore
export class HeaderComponent implements OnInit {
  name?: string;
  checkLogin = true;
  // @ts-ignore
  user: Users;
  checkRole = false;
  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      console.log("co token")
      this.checkLogin = false;
      this.name = this.tokenService.getUsers().name;
      console.log('name--->', this.name)
      // @ts-ignore
      this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    }
    for(let r of this.user.roles){
      console.log(r.id);
      if(r.id==2){
        this.checkRole=true;
      }
    }
  }
  // ham Logout
  logOut(){
    window.sessionStorage.clear();
    window.location.replace("");
  }
}
