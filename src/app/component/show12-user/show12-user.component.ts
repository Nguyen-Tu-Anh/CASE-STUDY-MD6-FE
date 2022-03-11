import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-show12-user',
  templateUrl: './show12-user.component.html',
  styleUrls: ['./show12-user.component.css']
})
export class Show12UserComponent implements OnInit {


  users!: Users[];
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

  findAll(page: number) {
    this.homeService.findAllPage(page).subscribe((data)=> {
      this.users = data.content;
    })
  }
}
