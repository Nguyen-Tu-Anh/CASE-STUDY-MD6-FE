import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Users} from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  findUserById(id: number): Observable<Users> {
    return this.http.get<Users>(` http://localhost:8080/home/${id}`);
  }
}
