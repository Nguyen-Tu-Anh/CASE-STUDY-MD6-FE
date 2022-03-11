import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {Users} from "../../model/Users";
import {Review} from "../../model/Review";
import {Role} from "../../model/Role";
import {Images} from "../../model/Images";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  user!: Users;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = Number(<string>param.get('id'))
      this.showDetails()
    })
  }

  showDetails() {
    this.userService.findUserById(this.id).subscribe((data) => {
      console.log(data);
      this.user = data
    });
  }

}

