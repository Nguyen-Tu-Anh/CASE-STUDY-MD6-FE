import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // username: string[] | undefined;
  username: any = 'My account';
  checkLogin = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      console.log('vao if khong')
      this.checkLogin = true;
      console.log('checkLogin == ', this.checkLogin)
      console.log('user == ', this.tokenService.getUsers())
      this.username = this.tokenService.getUsers().name;
    }
  }

}
