export class Order{
  id!:number;
  priceOfHour!:number;
  dateOfOrder!:Date;
  hoursOfService!: number;
  status!:number;
  customerId!:number;
  providerId!:number;

  //1 : Chờ phản hồi
  //2 : Đã nhận
  //3 : Hoàn thành


  constructor(id: number, priceOfHour: number, dateOfOrder: Date, hoursOfService: number, status: number, customerId: number, providerId: number) {
    this.id = id;
    this.priceOfHour = priceOfHour;
    this.dateOfOrder = dateOfOrder;
    this.hoursOfService = hoursOfService;
    this.status = status;
    this.customerId = customerId;
    this.providerId = providerId;
  }
}
