import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../model/Users";
import {Order} from "../../model/order";
import {HomeService} from "../../service/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-rent',
  templateUrl: './modal-rent.component.html',
  styleUrls: ['./modal-rent.component.css']
})
export class ModalRentComponent implements OnInit {
  @Input()
    // @ts-ignore
  provider: Users;
  time!: number;
  totalPrice!: number;
  order!: Order;
  user!: Users;

  constructor(private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
  }

  price() {
    this.totalPrice = this.time * this.provider.price;
  }

  rent() {
    if (this.user == null) {
      alert("Please login to rent !!!")
      window.location.replace("/")
    } else {
      console.log("user", this.user)
      this.order = new Order(this.totalPrice, this.time, this.user, this.provider);
      this.homeService.createOrder(this.order).subscribe(data => {
        window.location.replace("/payment")
      })
    }
  }

}
