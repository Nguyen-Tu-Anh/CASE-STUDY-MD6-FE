import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "../../model/Review";
import {Observable} from "rxjs";
import {Chat} from "../../model/Chat";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }


  // xem danh sách comen của user
  showAllComment(page:number, id:number){
    return this.http.get<any>(`http://localhost:8080/riview/${id}/chat/${page}`);
  }

//create comen user end provider
  create(chat: Chat): Observable<any> {
    return this.http.post('http://localhost:8080/riview/create', chat)
  }
//delete comment
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/riview/delete/${id}`)
  }

}
