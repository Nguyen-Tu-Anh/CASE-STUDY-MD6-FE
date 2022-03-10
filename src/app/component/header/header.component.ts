import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // username: string[] | undefined;
  // checkLogin = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
  //   if(this.tokenService.getToken()){
  //     this.checkLogin = true;
  //     this.username = this.tokenService.getUsers();
  //   }
  }

}
