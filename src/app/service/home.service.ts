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
  show12ProviderHotPage(page:number){
    return this.http.get<any>(`http://localhost:8080/users/most/date/provider/${page}`);
  }
  show12ProviderCreateNewAccount(page:number){
    return this.http.get<any>(`http://localhost:8080/users/hot/providers/${page}`);
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

  ban(id: number) {
    return this.http.get(`http://localhost:8080/users/ban/${id}`)
  }

  unban(id:number){
    return this.http.get(`http://localhost:8080/users/unban/${id}`);
  }

  findAllUsers(page:number):Observable<any>{
    return this.http.get(`http://localhost:8080/users/page/${page}`);
  }
}
