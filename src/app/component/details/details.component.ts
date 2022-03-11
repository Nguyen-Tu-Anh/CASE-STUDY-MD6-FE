import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  user!: Users;
  constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = Number(<string>param.get('id'))
      this.showDetails()
    })
  }

  showDetails() {
    this.homeService.findUserById(this.id).subscribe((data) => {
      console.log(data);
      this.user = data
    });
  }

}

