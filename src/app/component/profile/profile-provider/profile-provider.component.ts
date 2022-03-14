import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {Users} from "../../../model/Users";

import {HomeService} from "../../../service/home.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {


  formProfiveProvider!: FormGroup;
  id: any;
  userProvider!: Users;

  constructor(private homeService: HomeService, private router: Router, private activerouter: ActivatedRoute, private storage: AngularFireStorage) {
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
      requirement: new FormControl(),
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
    if (this.formProfiveProvider.get('roles')?.value == "1" || this.formProfiveProvider.get('roles')?.value == "3" ) {
      this.formProfiveProvider.get('roles')?.setValue("2")
      this.formProfiveProvider.value.avatar = this.fb;
      this.homeService.setStatusUserProvider(this.id).subscribe(() => {
      this.homeService.UpdateProfileUserProvider(this.formProfiveProvider.value, this.id).subscribe(() => {
          alert("cập nhật profile thanh cong");
          // this.router.navigate([''])
        })
          alert("cập nhật profile thanh cong");
          this.router.navigate([''])
      })
    } else {
      this.formProfiveProvider.get('roles')?.setValue("2")
      this.router.navigate([''])
    }
  }

  showProfileUserProvider() {
    this.homeService.findById(this.id).subscribe((data => {
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
      this.formProfiveProvider.get('requirement')?.setValue(this.userProvider.requirement);
      this.formProfiveProvider.get('vipDate')?.setValue(this.userProvider.vipDate);
      this.formProfiveProvider.get('startDate')?.setValue(this.userProvider.startDate);
      this.formProfiveProvider.get('roles')?.setValue(this.userProvider.roles[0].id);
      this.formProfiveProvider.get('price')?.setValue(this.userProvider.price);
      this.formProfiveProvider.get('serviceOfProviders')?.setValue(this.userProvider.serviceOfProviders);
      this.fb = this.userProvider.avatar;
    }));


  }


  public checkUploadFile = true;

  public fb: string | any;
  downloadURL: Observable<string> | any;

  onFileSelected(event: any) {
    this.checkUploadFile = false;
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
