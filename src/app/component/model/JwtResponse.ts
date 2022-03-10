export  class JwtResponse{
  public token: string | undefined;
  public username?: string;


  constructor(token: string | undefined, username: string) {
    this.token = token;
    this.username = username;
  }
}
