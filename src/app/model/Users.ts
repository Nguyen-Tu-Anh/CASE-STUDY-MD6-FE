import {Review} from "./Review";
import {Image} from "./Image";

export class Users{
  id!: number;
  name! :String ;
  email!:String;
  avatar!:String;
  age!:number;
  gender!:String;
  dateOfBirth!:String;
  city!:String;
  nationality!:String;
  description!:String;
  requirement!:String;
  facebookUrl!:String;
  images!:Image[];
  price!:number;
  reviews!:Review[];


  constructor(id: number, name: String, email: String, avatar: String, age: number, gender: String, dateOfBirth: String, city: String, nationality: String, description: String, requirement: String, facebookUrl: String, images: Image[], price: number, reviews: Review[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    this.age = age;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.nationality = nationality;
    this.description = description;
    this.requirement = requirement;
    this.facebookUrl = facebookUrl;
    this.images = images;
    this.price = price;
    this.reviews = reviews;
  }
}
