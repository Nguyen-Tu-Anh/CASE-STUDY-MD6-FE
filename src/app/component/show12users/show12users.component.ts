import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-show12users',
  templateUrl: './show12users.component.html',
  styleUrls: ['./show12users.component.css']
})
export class Show12usersComponent implements OnInit {


  users: Users[] = [];
  page:number = 0;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.findAll(this.page)
  }

  nextPage():void{
    this.page ++;
    this.findAll(this.page)
  }
  previous():void{
    this.page --;
    this.findAll(this.page)
  }

  findAll(page: number) {
    this.homeService.findAllPage(page).subscribe((data)=> {
      this.users = data.content;
    })
  }

}
