import {Users} from "./Users";

export class Chat{
  id!:number;
  message!:string;
  customer!:Users;
  provider!:Users;


  constructor(id: number, message: string, customer: Users, provider: Users) {
    this.id = id;
    this.message = message;
    this.customer = customer;
    this.provider = provider;
  }
}
