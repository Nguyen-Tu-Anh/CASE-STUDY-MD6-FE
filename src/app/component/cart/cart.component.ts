import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Users} from "../../model/Users";
import {Order} from "../../model/order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user!: Users;
  orders!: Order[];


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    this.findAllOrder();
  }

  findAllOrder() {
    this.homeService.showAllOrderById(this.user.id).subscribe(data => {
      console.log("cart", data)
      this.orders = data;
    })
  }

}
