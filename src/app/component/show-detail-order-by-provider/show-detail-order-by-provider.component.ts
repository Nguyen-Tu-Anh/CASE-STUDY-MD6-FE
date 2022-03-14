import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../model/order";
import {OrderService} from "../../service/orderService/order.service";
import {HomeService} from "../../service/home.service";
import {Users} from "../../model/Users";

@Component({
  selector: 'app-show-detail-order-by-provider',
  templateUrl: './show-detail-order-by-provider.component.html',
  styleUrls: ['./show-detail-order-by-provider.component.css']
})
export class ShowDetailOrderByProviderComponent implements OnInit {
  id: any;
  oderProvider!: Order;
  customeID!: Users;


  constructor(private orderService: OrderService,private homeService:HomeService, private activerouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showDetailOrderByProvider()
    })
    this.findUsersByIdName()

  }
  findUsersByIdName(){
    this.homeService.findById(this.oderProvider.customerId).subscribe(data =>{
      this.customeID= data;
    })
  }

  showDetailOrderByProvider() {
    this.orderService.findById(this.id).subscribe((data =>{
      this.oderProvider = data;
    }));

  }

}
