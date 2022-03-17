import {Component, OnInit} from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";
import {Search} from "../../model/Search";

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

  userId : number = localStorage.getItem('userId');
  search:Search = {};
  provider : Users [] = [] ;
  checkSearch = false;

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

      this.show12ProviderHot(this.page)
    }

  }
  backPage():void{

    if(this.page >0){
      this.page --;
      this.show12ProviderHot(this.page)
    }

  }
  show12ProviderHot(page: number) {
    this.homeService.show12ProviderHotPage(page).subscribe((data)=> {
      this.users = data.content;
      this.totalPages = data['totalPages']


    })
  }

  nextPageNew():void{
    this.page++
    this.show12ProviderCreateNewAccount(this.page)
    if(this.page > this.totalPages-1){
      this.page = this.totalPages-1
      this.show12ProviderCreateNewAccount(this.page)
    }

  }
  backPageNew():void {

    if (this.page > 0) {
      this.page--;
      this.show12ProviderCreateNewAccount(this.page)
    }
  }


    show12ProviderCreateNewAccount(page: number) {
    this.homeService.show12ProviderCreateNewAccount(page).subscribe((data)=> {
      this.usersNew = data.content;
      this.totalPages = data['totalPages']



    })
  }
  searchNow() {
    this.checkSearch = true;
    console.log('this.search')
    console.log(this.search)
    this.homeService.searchNow(this.search).subscribe((data)=>{
      this.provider = data['content'];
      console.log(data)
      console.log('this.provider')
      console.log(this.provider)

    })

}
}
