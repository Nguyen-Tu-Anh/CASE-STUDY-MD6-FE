import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Users} from "../../../model/Users";
import {HomeService} from "../../../service/home.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {

  formProfiveProvider!: FormGroup;
  id: any;
  userProvider!: Users;

  constructor(private homeService: HomeService, private router: Router, private activerouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.formProfiveProvider = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      avatar: new FormControl(),
      phoneNumber: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
      description: new FormControl(),
      vipDate: new FormControl(),
      startDate: new FormControl(),
      roles: new FormControl(),
      price: new FormControl(),
      serviceOfProviders: new FormControl(),

    })
    this.activerouter.params.subscribe((data) => {
      this.id = data['id'];
      this.showProfileUserProvider();
    });

  }

  updateProfileProvider() {
    this.homeService.UpdateProfileUserProvider(this.formProfiveProvider.value).subscribe(() => {

      alert("cập nhật profile thanh cong");
      this.router.navigate([''])
    })
  }
  showProfileUserProvider() {
    this.homeService.findById(this.id).subscribe((data =>{
      this.userProvider = data;
      this.formProfiveProvider.get('id')?.setValue(this.userProvider.id);
      this.formProfiveProvider.get('name')?.setValue(this.userProvider.name);
      this.formProfiveProvider.get('username')?.setValue(this.userProvider.username);
      this.formProfiveProvider.get('email')?.setValue(this.userProvider.email);
      this.formProfiveProvider.get('avatar')?.setValue(this.userProvider.avatar);
      this.formProfiveProvider.get('phoneNumber')?.setValue(this.userProvider.phoneNumber);
      this.formProfiveProvider.get('age')?.setValue(this.userProvider.age);
      this.formProfiveProvider.get('gender')?.setValue(this.userProvider.gender);
      this.formProfiveProvider.get('status')?.setValue(this.userProvider.status);
      this.formProfiveProvider.get('description')?.setValue(this.userProvider.description);
      this.formProfiveProvider.get('vipDate')?.setValue(this.userProvider.vipDate);
      this.formProfiveProvider.get('startDate')?.setValue(this.userProvider.startDate);
      this.formProfiveProvider.get('roles')?.setValue(this.userProvider.roles);
      this.formProfiveProvider.get('price')?.setValue(this.userProvider.price);
      this.formProfiveProvider.get('serviceOfProviders')?.setValue(this.userProvider.serviceOfProviders);
    }));

  }

}
