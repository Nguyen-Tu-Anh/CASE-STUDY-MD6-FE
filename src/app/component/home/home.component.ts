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
  usersNew : Users[] = [];
  page:number = 0;
  totalPages : number = 1;
  // @ts-ignore
  userId : number = localStorage.getItem('userId');

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.show12ProviderHot(this.page)
    this.show12ProviderCreateNewAccount(this.page)

  }
  nextPage():void{
    this.page++
    this.show12ProviderHot(this.page)
    if(this.page > this.totalPages-1){
      this.page = this.totalPages-1
      console.log('page')
      console.log(this.page)
      this.show12ProviderHot(this.page)
    }

  }
  backPage():void{

    if(this.page >0){
      this.page --;
      this.show12ProviderHot(this.page)
      console.log(this.page)
    }

  }
  show12ProviderHot(page: number) {
    this.homeService.show12ProviderHotPage(page).subscribe((data)=> {
      this.users = data.content;
      this.totalPages = data['totalPages']
      console.log("totalPages")
      console.log(this.totalPages)
      console.log("data")
      console.log(data)

    })
  }

  nextPageNew():void{
    this.page++
    this.show12ProviderCreateNewAccount(this.page)
    if(this.page > this.totalPages-1){
      this.page = this.totalPages-1
      console.log('page')
      console.log(this.page)
      this.show12ProviderCreateNewAccount(this.page)
    }

  }
  backPageNew():void {

    if (this.page > 0) {
      this.page--;
      this.show12ProviderCreateNewAccount(this.page)
      console.log(this.page)
    }
  }


    show12ProviderCreateNewAccount(page: number) {
    this.homeService.show12ProviderCreateNewAccount(page).subscribe((data)=> {
      this.usersNew = data.content;
      this.totalPages = data['totalPages']
      console.log("totalPages")
      console.log(this.totalPages)
      console.log("data")
      console.log(data)

    })
  }

}
