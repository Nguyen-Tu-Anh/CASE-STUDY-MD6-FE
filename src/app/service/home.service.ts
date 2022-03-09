import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../model/Users";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  // Hiển thị 12 user...
  findAllPage(page:number){
    return this.http.get<any>('http://localhost:8080/home/hot/providers/' + page);
  }
  // xem danh sách đơn thuê của nccdv
  showBillProvider(page:number){
    return this.http.get<any>('http://localhost:8080/home/provider');
  }

}
