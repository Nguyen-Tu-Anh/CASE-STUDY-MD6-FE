import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeService} from "../../service/home.service";
import {Users} from "../../model/Users";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modal-rent',
  templateUrl: './modal-rent.component.html',
  styleUrls: ['./modal-rent.component.css']
})
export class ModalRentComponent implements OnInit {
  rentForm!: FormGroup;
  user!: Users;
  providerId!: number;
  totalPrice: number = this.rentForm.value.hoursOfService * this.user.price;

  constructor(private homeService: HomeService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.providerId = data['id'];
    })
    let customerId = localStorage.getItem("customerId");
    this.homeService.findById(Number(customerId)).subscribe((data) => {
      this.user = data;
    })
    this.rentForm = new FormGroup({
      id: new FormControl(0),
      pricePerHour: new FormControl(0),
      dateOfOrder: new FormControl(new Date),
      hoursOfService: new FormControl(0),
      status: new FormControl(1),
      customerId: new FormControl(customerId),
      providerId: new FormControl(this.providerId)
    })
  }

  rent(): void {

  }

}
