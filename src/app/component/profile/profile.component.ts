import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Users} from "../../model/Users";
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../service/home.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  user: Users;
  formUserProfile!: FormGroup;
  id: any;
  userProvider!: Users;

  // @ts-ignore
  constructor(private homeService: HomeService, private router: Router, private activerouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    this.formUserProfile = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      avatar: new FormControl(),
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
    this.activerouter.params.subscribe((data: { [x: string]: any; }) => {
      this.id = data['id'];
      this.showProfileUser();
    });
  }

  updateProfile() {
    this.homeService.updateUser(this.formUserProfile.value).subscribe(() => {
      alert("cập nhật profile thanh cong");
      this.router.navigate(['']);
    })
  }
  showProfileUser() {
    this.homeService.findById(this.id).subscribe((data =>{
      this.userProvider = data;
      this.formUserProfile.get('id')?.setValue(this.userProvider.id);
      this.formUserProfile.get('name')?.setValue(this.userProvider.name);
      this.formUserProfile.get('username')?.setValue(this.userProvider.username);
      this.formUserProfile.get('email')?.setValue(this.userProvider.email);
      this.formUserProfile.get('phoneNumber')?.setValue(this.userProvider.phoneNumber);
      this.formUserProfile.get('avatar')?.setValue(this.userProvider.avatar);
      this.formUserProfile.get('age')?.setValue(this.userProvider.age);
      this.formUserProfile.get('gender')?.setValue(this.userProvider.gender);
      this.formUserProfile.get('status')?.setValue(this.userProvider.status);
      this.formUserProfile.get('description')?.setValue(this.userProvider.description);
      this.formUserProfile.get('vipDate')?.setValue(this.userProvider.vipDate);
      this.formUserProfile.get('startDate')?.setValue(this.userProvider.startDate);
      this.formUserProfile.get('roles')?.setValue(this.userProvider.roles);
      this.formUserProfile.get('price')?.setValue(this.userProvider.price);
      this.formUserProfile.get('serviceOfProviders')?.setValue(this.userProvider.serviceOfProviders);
    }));
  }
}



