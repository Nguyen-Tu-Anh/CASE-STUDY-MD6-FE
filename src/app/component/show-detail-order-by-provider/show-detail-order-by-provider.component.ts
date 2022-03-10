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

  formShowOder!: FormGroup;
  id: any;
  oderProvider!: Order;
  customeID!: Users;

  constructor(private orderService: OrderService,private homeService:HomeService, private activerouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formShowOder = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      hoursOfService: new FormControl(),
      dateOfOrder: new FormControl(),
      priceOfHour: new FormControl(),
      status: new FormControl()
    })
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showDetailOrderByProvider();
    });
  }
  findUsersByIdName(){
    this.homeService.findById(this.oderProvider.customerId).subscribe(data =>{
      this.customeID= data;
      return data.name;
    })
  }

  showDetailOrderByProvider() {
    this.orderService.findById(this.id).subscribe((data =>{
      this.oderProvider = data;
      this.formShowOder.get('id')?.setValue(this.oderProvider.id);
      this.formShowOder.get('name')?.setValue(this.findUsersByIdName());
      this.formShowOder.get('hoursOfService')?.setValue(this.oderProvider.hoursOfService);
      this.formShowOder.get('dateOfOrder')?.setValue(this.oderProvider.dateOfOrder);
      this.formShowOder.get('priceOfHour')?.setValue(this.oderProvider.priceOfHour);
      this.formShowOder.get('status')?.setValue(this.oderProvider.status);
    }));

  }

}
