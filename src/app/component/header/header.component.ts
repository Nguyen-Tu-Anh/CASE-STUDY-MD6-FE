import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";

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
  checkAdmin = false;


  constructor(private tokenService: TokenService,private homeService:HomeService) {
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
    this.homeService.findById(this.user.id).subscribe((data)=>{
      this.user = data;
      console.log(this.user.roles)
      for(let r of this.user.roles){
        console.log( "id la : " + r.id);
        if(r.id==2){
          this.checkRole=true;
        }
        if(r.id==3){
          this.checkAdmin=true;
        }
      }
    });
  }

  // ham Logout
  logOut(){
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.location.replace("");
  }
}
