import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Users} from "../../model/Users";
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HomeService} from "../../service/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  checkUserProvider = false;
  formUserProfile!: FormGroup;
  id: any;
  userProvider!: Users;


  constructor(private homeService: HomeService, private router: Router,
              private activerouter: ActivatedRoute,
              private storage: AngularFireStorage) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    this.formUserProfile = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null,Validators.required),
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      password: new FormControl(),
      avatar: new FormControl(),
      phoneNumber: new FormControl(null,Validators.required),
      age: new FormControl(null,Validators.required),
      gender: new FormControl(),
      dateOfBirth: new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      nationality: new FormControl(null,Validators.required),
      description: new FormControl(null,Validators.required),
      requirement: new FormControl(null,Validators.required),
      identify: new FormControl(null,Validators.required),
      images: new FormControl(),
      // status: new FormControl(),
      // vipDate: new FormControl(),
      startDate: new FormControl(),
      // roles: new FormControl(),
      // price: new FormControl(),
      // serviceOfProviders: new FormControl(),
    })
    this.activerouter.params.subscribe((data: { [x: string]: any; }) => {
      this.id = data['id'];
      this.showProfileUser();
    });
  }


  // ham Logout
 logOut(){
   window.sessionStorage.clear();
   window.location.replace("");
 }

  updateProfile() {
    this.formUserProfile.value.avatar = this.fb;
    this.homeService.updateUser(this.formUserProfile.value).subscribe(() => {
      alert("cập nhật profile thanh cong");
      this.router.navigate([""])
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
      this.formUserProfile.get('dateOfBirth')?.setValue(this.userProvider.dateOfBirth);
      this.formUserProfile.get('images')?.setValue(this.userProvider.images);
      this.formUserProfile.get('city')?.setValue(this.userProvider.city);
      this.formUserProfile.get('nationality')?.setValue(this.userProvider.nationality);
      this.formUserProfile.get('description')?.setValue(this.userProvider.description);
      this.formUserProfile.get('requirement')?.setValue(this.userProvider.requirement);
      this.formUserProfile.get('identify')?.setValue(this.userProvider.identify);
      this.formUserProfile.get('startDate')?.setValue(this.userProvider.startDate);
      this.formUserProfile.get('status')?.setValue(this.userProvider.status);
      this.fb= this.userProvider.avatar;
      this.checkUserProvider = true;
    }));
  }

  public  checkUploadFile = true;
  public  fb: string | any;
  downloadURL: Observable<string> | any;
  onFileSelected(event: any) {
    this.checkUploadFile= false;
    var n = Date.now();
    const file = event.target.files[0];

    const filePath = `RoomsImages/${n}`;

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
              console.log("url")
              console.log(url)
              this.checkUploadFile = true;
            }
          });
        })
      )
      .subscribe((url: any) => {
        console.log(url)
      });
  }
}



