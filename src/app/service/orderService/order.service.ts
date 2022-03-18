import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../../model/Users";
import {Order} from "../../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
  }


  providerAccept(order: Order): Observable<any> {
    return this.http.post('http://localhost:8080/providers' + "/accept", order);
  }

  providerReject(order: Order): Observable<any> {
    return this.http.post('http://localhost:8080/providers' + "/reject", order);
  }
}
