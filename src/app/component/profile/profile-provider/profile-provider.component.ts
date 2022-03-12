import { Component, OnInit } from '@angular/core';
import {Users} from "../../../model/Users";

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {
// @ts-ignore
  user: Users;
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
  }

}
