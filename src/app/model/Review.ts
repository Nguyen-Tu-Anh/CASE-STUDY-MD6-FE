export class Review{
  id!:number;
  description!:String;
  point!:number;


  constructor(id: number, description: String, point: number) {
    this.id = id;
    this.description = description;
    this.point = point;
  }
}
