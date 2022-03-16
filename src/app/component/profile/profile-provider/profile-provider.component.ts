import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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
  title = 'demoUploadFile'
  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;
  arrfiles: any = [];
  arrayPicture : string[] = [];     //up load 3 anh

  checkUserProvider = false;
  formUserProfile!: FormGroup;
  id: any;
  userProvider!: Users;


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


      id: new FormControl(),
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      avatar: new FormControl(),
      images: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
      description: new FormControl(),
      requirement: new FormControl(),
      dateOfBirth: new FormControl(),
      city: new FormControl(),
      facebookUrl: new FormControl(),
      identify: new FormControl(),
      nationality: new FormControl(),
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
      this.formUserProfile.get('id')?.setValue(this.userProvider.id);
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

  // public  im: string | any;
  // onFileSelectedIMG(event: any) {
  //   this.checkUploadFile= false;
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //
  //   const filePath = `RoomsImages/${n}`;
  //
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe((url: any) => {
  //           if (url) {
  //             this.im = url;
  //             console.log("url")
  //             console.log(url)
  //             this.checkUploadFile = true;
  //           }
  //         });
  //       })
  //     )
  //     .subscribe((url: any) => {
  //       console.log(url)
  //     });
  // }
}
