
// KIEU DU LIEU JSON
export class SignUpForm {
  public name: string | undefined;
  public username: string | undefined;
  public email: string | undefined;
  public password: string | undefined;
  public phoneNumber: string;
  public roles: string[] | undefined;


  constructor(name: string | undefined, username: string | undefined, email: string | undefined, password: string | undefined, phoneNumber: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.roles = ['admin'];
  }
}
