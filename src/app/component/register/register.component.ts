import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpForm} from "../model/SignUpForm";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status = 'Please fill in the form register!'

  form: any= {}; // du lieu tu form
  hide = true;  //hide password
  emailFormControl = new FormControl('',
[Validators.required,
              Validators.email
])   //validate email

  signUpForm!: SignUpForm;   //khai bao SignUpform moi

  // khai bao 2 bien de kiem tra trung lap
  // bat kieu json ben tycripe
  error1: any = {
    message: "no_username"
  }
  error2: any = {
    message: "no_email"
  }
  success: any = {
    message: "yes"
  }

  // truyen Service vao contrutor
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //khoi tao truyen vao ham ben Service
  // BƯỚC 2 : Chạy vào hàm triển khai LOGIC API
  ngSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.phoneNumber
    );

    // BƯỚC 3 CHECK TRÙNG LẶP VALIDATE MÌNH TỰ LOGIC
    // goi ham ra de truyenvao goi Signup ra truyen this.signup vua khoi tao
    // truy xuat data .subcribe-> truy xuat du lieu Observable ben Service
    // data la ben BE gui ve ( check trung lap ) request lúc nào cũng có data trả về để FE so sánh
    this.authService.signUp(this.signUpForm).subscribe(data =>{
      console.log("data")
      console.log(data)
       if(JSON.stringify(data)==JSON.stringify(this.error1)) {
         this.status = 'The Username is existed! Please try again!'
       }
      if(JSON.stringify(data)==JSON.stringify(this.error2)) {
        this.status = 'The Email is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)) {
        this.status = 'Create account success!'
      }
    })
  }
}
