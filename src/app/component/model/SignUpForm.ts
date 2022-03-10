
// KIEU DU LIEU JSON
export class SignUpForm {
  public username: string | undefined;
  public email: string | undefined;
  public password: string | undefined;
  public phoneNumber: string;
  public roles: string[] | undefined;


  constructor(username: string | undefined, email: string | undefined, password: string | undefined, phoneNumber: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.roles = ['user'];
  }
}
