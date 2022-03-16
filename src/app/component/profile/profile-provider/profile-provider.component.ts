

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  title = 'demoUploadFile'
  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;
  arrfiles: any = [];
  arrayPicture : string[] = [];     //up load 3 anh

  checkUserProvider = false;
  formUserProfile!: FormGroup;
  id: any;
  userProvider!: Users;

  valuetexa : string[] = [
    "chiều cao :",
    "cân nặng  :",
    "sở thích  :",
    ];
  v : string = "as";

@ViewChild('areaElement')areaElement: ElementRef | undefined;

  constructor(private homeService: HomeService,

              private router: Router,
              private activerouter: ActivatedRoute,
              private storage: AngularFireStorage) {
  }

  // upload 3 anh
  submit() {
    for (let file of this.arrfiles) {
      if (file != null) {
        const filePath = file.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, file).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(
            url => {
              this.arrayPicture.push(url);
              console.log(url);
            })))
        ).subscribe();
      }
    }
  }
  uploadFileImg(event: any) {
    for (const argument of event.target.files) {
      this.arrfiles.push(argument)
    }
    this.submit();
  }


  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem("Users_Key"));
    this.formUserProfile = new FormGroup({

      name: new FormControl(null,Validators.required),//ko dc de trong
      username: new FormControl(null,Validators.required),
      password: new FormControl(),
      email: new FormControl("",[Validators.required,Validators.email]),
      phoneNumber: new FormControl(null,Validators.required),
      avatar: new FormControl(),
      images: new FormControl(),
      age: new FormControl(null,Validators.required),
      gender: new FormControl(),
      status: new FormControl(),
      description: new FormControl(null,Validators.required),
      requirement: new FormControl(),
      dateOfBirth: new FormControl(),
      city: new FormControl(null,Validators.required),
      facebookUrl: new FormControl(null,Validators.required),
      identify: new FormControl(null,Validators.required),
      nationality: new FormControl(null,Validators.required),
      price: new FormControl(),
      serviceOfProviders: new FormControl(),
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
    this.homeService.updateProfileUserProvider(this.formUserProfile.value).subscribe(() => {
      alert("cập nhật profile thanh cong");
      this.router.navigate([""])
    })
  }
  showProfileUser() {
    this.homeService.findById(this.id).subscribe((data =>{
      this.userProvider = data;
      this.formUserProfile.get('name')?.setValue(this.userProvider.name);
      this.formUserProfile.get('username')?.setValue(this.userProvider.username);
      this.formUserProfile.get('password')?.setValue(this.userProvider.password);
      this.formUserProfile.get('email')?.setValue(this.userProvider.email);
      this.formUserProfile.get('phoneNumber')?.setValue(this.userProvider.phoneNumber);
      this.formUserProfile.get('avatar')?.setValue(this.userProvider.avatar);
      this.formUserProfile.get('images')?.setValue(this.userProvider.images);
      this.formUserProfile.get('age')?.setValue(this.userProvider.age);
      this.formUserProfile.get('gender')?.setValue(this.userProvider.gender);
      this.formUserProfile.get('status')?.setValue(this.userProvider.status);
      this.formUserProfile.get('description')?.setValue(this.userProvider.description);
      this.formUserProfile.get('requirement')?.setValue(this.userProvider.requirement);
      this.formUserProfile.get('dateOfBirth')?.setValue(this.userProvider.dateOfBirth);
      this.formUserProfile.get('city')?.setValue(this.userProvider.city);
      this.formUserProfile.get('facebookUrl')?.setValue(this.userProvider.facebookUrl);
      this.formUserProfile.get('identify')?.setValue(this.userProvider.identify);
      this.formUserProfile.get('nationality')?.setValue(this.userProvider.nationality);
      this.formUserProfile.get('price')?.setValue(this.userProvider.price);
      this.formUserProfile.get('serviceOfProviders')?.setValue(this.userProvider.serviceOfProviders);
      this.fb= this.userProvider.avatar;
      // this.im=this.userProvider.images;
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

  ngAfterViewInit(): void {
  }
}
