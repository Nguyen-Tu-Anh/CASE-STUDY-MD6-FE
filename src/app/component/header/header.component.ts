import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // username: string[] | undefined;
  // checkLogin = false;

  constructor()  {
  }

  ngOnInit(): void {
  //   if(this.tokenService.getToken()){
  //     this.checkLogin = true;
  //     this.username = this.tokenService.getUsers();
  //   }
  }

}
