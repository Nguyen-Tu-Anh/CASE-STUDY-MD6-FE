import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "../../model/Review";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }


  // xem danh sách comen của user
  showAllComen(page:number, id:number){
    return this.http.get<any>(`http://localhost:8080/riview/${id}/chat/${page}`);
  }

//create comen user end provider
  create(review: Review): Observable<any> {
    return this.http.post('http://localhost:3000/books', review)
  }

}
