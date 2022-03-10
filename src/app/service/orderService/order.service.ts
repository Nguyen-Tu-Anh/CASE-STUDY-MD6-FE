import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../../model/Users";
import {Order} from "../../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  // xem danh sách đơn thuê của provider
  showBillProvider(page:number){
    return this.http.get<any>('http://localhost:8080/order/rented-orders/' + page);
  }


  //tìm oderById trả về 1 đối tượng Oder.
  findById(id: number): Observable<Order> {
    return this.http.get<Order>(`http://localhost:8080/order/${id}`)
  }


  // hiển thị chi tiết đơn hàng đã đặt của Provider


}
