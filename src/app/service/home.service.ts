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
    return this.http.get<any>('http://localhost:8080/users/hot/providers/' + page);
  }
  findAllUserAndProvider(page:number){
    return this.http.get<any>(  'http://localhost:8080/users/page/' + page );
  }

  //tìm UserById trả về 1 đối tượng.
  findById(id: number): Observable<Users> {
    return this.http.get<Users>(`http://localhost:8080/users/${id}`)
  }

  //set lại status userProvider và lưu lại vào đb
  setStatusUserProvider(id : number): Observable<any> {
    return this.http.put('http://localhost:8080/users/provider/change/' + id,null)
  }

  updateUser(userProfile : Users) : Observable<any> {
    return this.http.put('http://localhost:8080/users/user/' , userProfile )
  }

  updateProfileUserProvider( userProfile : Users) : Observable<any> {
    return this.http.put('http://localhost:8080/users/provider/',userProfile )
  }


}
