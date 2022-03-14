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
  findAllUserAndProvider(page:number){
    return this.http.get<any>(  'http://localhost:8080/home/page/' + page );
  }

  //tìm UserById trả về 1 đối tượng.
  findById(id: number): Observable<Users> {
    return this.http.get<Users>(`http://localhost:8080/home/${id}`)
  }

  //set lại status userProvider và lưu lại vào đb
  setStatusUserProvider(userProviderStatus: Users): Observable<any> {
    return this.http.put('http://localhost:8080/home/provider/change/' + userProviderStatus.id ,userProviderStatus)
  }

  updateUser(userProfile : Users, id: number) : Observable<any> {
    return this.http.put('http://localhost:8080/home/' + id, userProfile )
  }

  UpdateProfileUserProvider(userProfile : Users) : Observable<any> {
    return this.http.put('http://localhost:8080/home/', userProfile )
  }


}
