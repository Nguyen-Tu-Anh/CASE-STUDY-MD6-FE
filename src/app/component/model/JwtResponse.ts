import {Users} from "../../model/Users";

export  class JwtResponse{
  public token: string | undefined;
  public users: Users;


  constructor(token: string | undefined, users: Users) {
    this.token = token;
    this.users = users;
  }
}
