import {Users} from "./Users";

export class Chat{
  id!:number;
  message!:string;
  customer!:Users;
  provider!:Users;
  point!:number;


  constructor(id: number, message: string, customer: Users, provider: Users, point: number) {
    this.id = id;
    this.message = message;
    this.customer = customer;
    this.provider = provider;
    this.point = point;
  }
}
