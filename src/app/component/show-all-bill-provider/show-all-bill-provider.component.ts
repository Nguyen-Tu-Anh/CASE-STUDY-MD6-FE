import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Users} from "../../model/Users";
import {Order} from "../../model/order";

@Component({
  selector: 'app-show-all-bill-provider',
  templateUrl: './show-all-bill-provider.component.html',
  styleUrls: ['./show-all-bill-provider.component.css']
})
export class ShowAllBillProviderComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  order: Order[] = [];
  page:number = 0;


  ngOnInit(): void {
    this.showBillProvider(this.page)
  }

  nextPage():void{
    this.page ++;
    this.showBillProvider(this.page)
  }

  showBillProvider(page: number) {
    this.homeService.showBillProvider(page).subscribe((data)=> {
      this.order = data.content;
    })
  }
}
