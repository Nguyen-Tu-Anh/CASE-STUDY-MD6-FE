import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {

  }

  // ham Logout
 logOut(){
   window.sessionStorage.clear();
   window.location.replace("");
 }
}
