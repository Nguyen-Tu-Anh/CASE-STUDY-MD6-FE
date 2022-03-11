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
  name!: string;
  // username: string = "Login";
  checkLogin = true;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      console.log("co token")
      this.checkLogin = false;
      this.name = this.tokenService.getUsers().name;
      console.log('name--->', this.name)
    }
  }
}
