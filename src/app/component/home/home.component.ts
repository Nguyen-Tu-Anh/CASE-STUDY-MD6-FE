import {Component, OnInit} from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Users[] = [];
  page:number = 0;
  totalPages : number = 1;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.findAll(this.page)

  }
  nextPage():void{
    this.page++
    this.findAll(this.page)
    if(this.page > this.totalPages-1){
      this.page = this.totalPages-1
      console.log('page')
      console.log(this.page)
      this.findAll(this.page)
    }

  }
  backPage():void{

    if(this.page >0){
      this.page --;
      this.findAll(this.page)
      console.log(this.page)
    }

  }

  findAll(page: number) {
    this.homeService.findAllPage(page).subscribe((data)=> {
      this.users = data.content;
      this.totalPages = data['totalPages']
      console.log("totalPages")
      console.log(this.totalPages)
      console.log("data")
      console.log(data)

    })
  }
}
