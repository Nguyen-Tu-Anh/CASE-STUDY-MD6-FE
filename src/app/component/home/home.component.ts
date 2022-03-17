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
  usersNew: Users[] = [];
  page: number = 0;
  hotPage : number = 0;
  totalPages: number = 1;
  user!: Users;

  // @ts-ignore
  userId : number  = localStorage.getItem('userId');
  search:Search = {};
  provider : Users [] = [] ;
  checkSearch = false;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.show12ProviderHot(this.page)
    this.show12ProviderCreateNewAccount(this.page)


    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    console.log("user",this.user)
  }

  nextPage(): void {
    this.hotPage++
    this.show12ProviderHot(this.hotPage)
    if (this.hotPage > this.totalPages - 1) {
      this.hotPage = this.totalPages - 1
      console.log('page')
      console.log(this.hotPage)
      this.show12ProviderHot(this.hotPage)
    }

  }

  backPage(): void {

    if (this.hotPage > 0) {
      this.hotPage--;
      this.show12ProviderHot(this.hotPage)
    }

  }

  show12ProviderHot(hotPage: number) {
    this.homeService.show12ProviderHotPage(hotPage).subscribe((data) => {
      this.users = data.content;
      this.totalPages = data['totalPages']


    })
  }

  nextPageNew(): void {
    this.page++
    this.show12ProviderCreateNewAccount(this.page)
    if (this.page > this.totalPages - 1) {
      this.page = this.totalPages - 1
      console.log('page')
      console.log(this.page)
      this.show12ProviderCreateNewAccount(this.page)
    }

  }

  backPageNew(): void {

    if (this.page > 0) {
      this.page--;
      this.show12ProviderCreateNewAccount(this.page)
    }
  }


  show12ProviderCreateNewAccount(page: number) {
    this.homeService.show12ProviderCreateNewAccount(page).subscribe((data) => {
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
