import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Users} from "../../model/Users";
import {HomeService} from "../../service/home.service";
import {ReviewService} from "../../service/reviewService/review.service";
import {Chat} from "../../model/Chat";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  provider!: Users;
  user!: Users;
  chats: Chat[] = [];
  chat!: Chat;
  page: number = 0;
  totalPages: number = 1;
  // @ts-ignore
  userId: number = localStorage.getItem("userId");

  formComment!: FormGroup;


  constructor(private homeService: HomeService,
              private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService,
              private router: Router
  ) {

  }


  ngOnInit(): void {
    this.formComment = new FormGroup({
      id: new FormControl(),
      message: new FormControl(),
      customer: new FormControl(),
      provider: new FormControl(),
    })

    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = Number(<string>param.get('id'))
      this.showProvider()
      this.showUser();
      this.findAllComment(this.page);

    })
    this.showIdComment(this.page);
  }


  showProvider(): any {
    this.homeService.findById(this.id).subscribe((data) => {
      this.provider = data;
    });
  }

  showUser(): any {
    this.homeService.findById(this.userId).subscribe(data => {
      this.user = data;
    })
  }

  //show all comen
  nextPage(): void {
    this.page++
    this.findAllComment(this.page)
    if (this.page > this.totalPages - 1) {
      this.page = this.totalPages - 1
      console.log('page')
      console.log(this.page)
      this.findAllComment(this.page)
    }

  }

  backPage(): void {

    if (this.page > 0) {
      this.page--;
      this.findAllComment(this.page)
      console.log(this.page)
    }

  }

  findAllComment(page: number) {
    this.reviewService.showAllComment(page, this.id).subscribe((data) => {
      this.chats = data.content;
      this.totalPages = data['totalPages'];
    })
  }


  saveComment() {
    this.reviewService.create(this.formComment.value).subscribe(() => {
      this.findAllComment(this.page)
    })
  }


  //deletecomment

  deleteComment(id: number) {
      this.reviewService.deleteComment(id).subscribe(() => {
        this.findAllComment(this.page);
      })

  }

  showIdComment(page: number) {
    this.reviewService.showAllComment(page, this.id).subscribe((data) => {
      this.formComment.get('customer')?.setValue(this.user);
      this.formComment.get('provider')?.setValue(this.provider);
    })
  }
}

