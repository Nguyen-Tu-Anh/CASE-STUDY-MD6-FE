import {Role} from "./Role";
import {Images} from "./images";
import {ServiceOfProvider} from "./ServiceOfProvider";
import {Review} from "./Review";

export class Users{
  id!: number;
  name!:String;
  username!:String;
  email!:String;
  password!:String;
  avatar!:String;
  phoneNumber!:String;
  age!:number;
  gender!:String;
  dateOfBirth!:String;
  city!:String;
  nationality!:String;
  status!:number;
  description!:String;
  requirement!:String;
  startDate!:Date;
  vipDate!:Date;
  facebookUrl!:String;
  countOfDate!:number;
  identify!:String;
  images!:Images;
  roles!:Role;
  price!:number;
  serviceOfProviders!:ServiceOfProvider;
  reviews!:Review;

  constructor(id: number, name: String, username: String, email: String, password: String, avatar: String, phoneNumber: String, age: number, gender: String, dateOfBirth: String, city: String, nationality: String, status: number, description: String, requirement: String, startDate: Date, vipDate: Date, facebookUrl: String, countOfDate: number, identify: String, images: Images, roles: Role, price: number, serviceOfProviders: ServiceOfProvider, reviews: Review) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.nationality = nationality;
    this.status = status;
    this.description = description;
    this.requirement = requirement;
    this.startDate = startDate;
    this.vipDate = vipDate;
    this.facebookUrl = facebookUrl;
    this.countOfDate = countOfDate;
    this.identify = identify;
    this.images = images;
    this.roles = roles;
    this.price = price;
    this.serviceOfProviders = serviceOfProviders;
    this.reviews = reviews;
  }
}
