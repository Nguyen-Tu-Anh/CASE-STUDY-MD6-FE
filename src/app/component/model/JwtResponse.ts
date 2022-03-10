export  class JwtResponse{
  public token: string | undefined;
  public users: any;


  constructor(token: string | undefined, users: any) {
    this.token = token;
    this.users = users;
  }
}
