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

  findAll(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8080/home')
  }
  findAllPage(page:number){
    return this.http.get<any>('http://localhost:8080/home');
  }
}
