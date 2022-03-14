import {Component, OnInit} from '@angular/core';
import {SignInForm} from "../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status = 'Please fill in the form Login!'
  hide = true;
  form: any = {};
  signInForm!: SignInForm;   //khai bao SignUpform moi

  // name: string[] | undefined;
  // checkLogin = false;
  // truyen service vao contructor
  // goi lớp tokenService xuống
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }  //router link trực tiếp từ Typecript
  // class Router co san Angular

  ngOnInit(): void {
    // if(this.tokenService.getToken()){
    //   this.checkLogin = true;
    //   this.name = this.tokenService.getUsers();
    // }
  }

  ngSubmit() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    console.log("form--->", this.signInForm)
    //data nay tra ve kieu cua JWTREPONSE(trong data co token, users)
    // sau khi Login xong se Rounter ve 1 UserACCOUNT
    this.authService.signIn(this.signInForm).subscribe(data => {
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        // @ts-ignore
        this.tokenService.setUsers(JSON.stringify(data.users));
        console.log(this.tokenService.getUsers())

        this.router.navigate(['']).then(() => {
          window.location.replace('');
        })  //router link truc tiep den componment
        // ko phai qua HTML

      }
    })
  }
}
