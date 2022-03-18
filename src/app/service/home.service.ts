import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Users} from "../model/Users";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order";
import {Search} from "../model/Search";

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

  updateProfileUserProvider(userProfile : Users) : Observable<any> {
    return this.http.put('http://localhost:8080/users/provider/',userProfile )
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post('http://localhost:8080/users/createOrder', order);
  }

  showAllOrderById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/users/' + id + "/showAllOrders")
  }
  searchNow(search:Search):Observable<any>{
    return this.http.post<any>('http://localhost:8080/users/search/0',search);
  }

  ban(id: number) {
    return this.http.get(`http://localhost:8080/users/ban/${id}`)
  }

  unban(id:number){
    return this.http.get(`http://localhost:8080/users/unban/${id}`);
  }


  makeAdmin(id:number){
    return this.http.get(`http://localhost:8080/users/make/admin/${id}`);
  }

  removeAdmin(id:number){
    return this.http.get(`http://localhost:8080/users/remove/admin/${id}`);
}
  findAllUsers(page:number):Observable<any>{
    return this.http.get(`http://localhost:8080/users/page/${page}`);

  }
  makeVip(id: number) {
    return this.http.get(`http://localhost:8080/users/vip/${id}`);
  }
}
