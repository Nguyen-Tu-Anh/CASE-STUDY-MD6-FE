import {Users} from "./Users";

export class Order{
  id!:number;
  priceOfHour!:number;
  dateOfOrder!:Date;
  hoursOfService!: number;
  status!:string;
  customer!:Users;
  provider!:Users;

  //1 : Chờ phản hồi
  //2 : Đã nhận
  //3 : Hoàn thành

  constructor(priceOfHour: number, hoursOfService: number, customer: Users, provider: Users) {
    this.priceOfHour = priceOfHour;
    this.hoursOfService = hoursOfService;
    this.customer = customer;
    this.provider = provider;
  }
}
