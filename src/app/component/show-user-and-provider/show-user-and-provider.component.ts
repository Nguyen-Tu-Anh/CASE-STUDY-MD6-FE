import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-show-user-and-provider',
  templateUrl: './show-user-and-provider.component.html',
  styleUrls: ['./show-user-and-provider.component.css']
})
export class ShowUserAndProviderComponent implements OnInit {
  users: Users[] = [];
  page:number = 0;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }
  nextPage():void{
    this.page ++;
    this.findAll(this.page)
  }

  findAll(page: number) {
    this.homeService.findAllUserAndProvider(page).subscribe((data)=> {
      this.users = data.content;
      console.log("data")
      console.log(data)
    })
  }
}
