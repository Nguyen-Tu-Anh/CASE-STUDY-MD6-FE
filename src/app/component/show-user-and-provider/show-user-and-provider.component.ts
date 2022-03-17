import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";
import {Role} from "../../model/Role";
import { Router } from '@angular/router';
import {stat} from "fs";

@Component({
  selector: 'app-show-user-and-provider',
  templateUrl: './show-user-and-provider.component.html',
  styleUrls: ['./show-user-and-provider.component.css']
})
export class ShowUserAndProviderComponent implements OnInit {
  users: Users[] = [];
  page:number = 0;
  user!: Users;
  totalPages : number = 1;
  // @ts-ignore
  userId:number = localStorage.getItem('userId');


  constructor(private homeService: HomeService,private router: Router) {
  }

  ngOnInit(): void {
    let roles = localStorage.getItem("roles");
    let checkAdmin = true;
    if(roles=="3"){
      checkAdmin=false;
    }
    if(checkAdmin){
      this.router.navigate(["/"]);
    }
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
    this.homeService.findAllUserAndProvider(page).subscribe((data)=> {
      this.users = data.content;
      this.totalPages = data['totalPages']
     console.log("totalPages")
      console.log(this.totalPages)

    })
  }

  ban(id: number) {
    this.homeService.ban(id).subscribe(data => {
      alert("Ban success!")
      this.findAll(this.page);
    })
  }

  unban(id: number) {
    this.homeService.unban(id).subscribe(data => {
      alert("Unban success!")
      this.findAll(this.page);
    })
  }

  makeAdmin(id: number) {
    this.homeService.makeAdmin(id).subscribe(data => {
      alert("Make admin success!")
      this.findAll(this.page)
    })
  }

  removeAdmin(id: number) {
    this.homeService.removeAdmin(id).subscribe(data => {
      alert("Remove admin success!")
      this.findAll(this.page)
    })
  }
}
