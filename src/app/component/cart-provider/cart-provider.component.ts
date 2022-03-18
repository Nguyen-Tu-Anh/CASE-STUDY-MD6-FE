import { Component, OnInit } from '@angular/core';
import {Users} from "../../model/Users";
import {Order} from "../../model/order";
import {HomeService} from "../../service/home.service";
import {OrderService} from "../../service/orderService/order.service";

@Component({
  selector: 'app-cart-provider',
  templateUrl: './cart-provider.component.html',
  styleUrls: ['./cart-provider.component.css']
})
export class CartProviderComponent implements OnInit {
  user!:Users;
  orders!: Order[];

  constructor(private homeService: HomeService, private orderService: OrderService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    this.findAll();
  }

  findAll(){
    this.homeService.showAllProviderOrder(this.user.id).subscribe(data => {
      this.orders = data;
    })
  }

  accept(order: Order){
    this.orderService.providerAccept(order).subscribe(data => {
    })
  }

  reject(order: Order){
    this.orderService.providerReject(order).subscribe(data => {
    })
  }
}
