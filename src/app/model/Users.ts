import {Role} from "./Role";
import {Images} from "./images";
import {ServiceOfProvider} from "./ServiceOfProvider";
import {Review} from "./Review";

export class Users{
  id!: number;
  name!:string;
  username!:string;
  email!:string;
  password!:string;
  avatar!:string;
  phoneNumber!:string;
  age!:number;
  gender!:string;
  dateOfBirth!:string;
  city!:string;
  nationality!:string;
  status!:number;
  description!:string;
  requirement!:string;
  startDate!:Date;
  vipDate!:Date;
  facebookUrl!:string;
  countOfDate!:number;
  identify!:string;
  images!:Images;
  roles!:Role;
  price!:number;
  serviceOfProviders!:ServiceOfProvider;
  reviews!:Review;


  constructor(id: number, name: string, username: string, email: string, password: string, avatar: string, phoneNumber: string, age: number, gender: string, dateOfBirth: string, city: string, nationality: string, status: number, description: string, requirement: string, startDate: Date, vipDate: Date, facebookUrl: string, countOfDate: number, identify: string, images: Images, roles: Role, price: number, serviceOfProviders: ServiceOfProvider, reviews: Review) {
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
