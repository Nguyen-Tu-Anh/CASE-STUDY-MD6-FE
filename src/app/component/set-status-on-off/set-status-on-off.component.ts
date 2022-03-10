import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Users} from "../../model/Users";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-set-status-on-off',
  templateUrl: './set-status-on-off.component.html',
  styleUrls: ['./set-status-on-off.component.css']
})
export class SetStatusOnOffComponent implements OnInit {

  formSetStatus!: FormGroup;
  id: any;
  userProvider!: Users;

  constructor(private homeService: HomeService, private router: Router, private activerouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formSetStatus = new FormGroup({
      id: new FormControl(),
      status: new FormControl(),
    })
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showStatusUserProvider();
    });

  }

  saveStatusUserProvider() {
    this.homeService.setStatusUserProvider(this.formSetStatus.value).subscribe(() => {
      alert("cập nhật status thanh cong")
      this.router.navigate(['/home']);
    })

  }

  showStatusUserProvider() {
    this.homeService.findById(this.id).subscribe((data =>{
      this.userProvider = data;
      this.formSetStatus.get('id')?.setValue(this.userProvider.id);
      this.formSetStatus.get('status')?.setValue(this.userProvider.status);
    }));

  }

}
