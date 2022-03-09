export class Order {
  id!:number;
  priceOfHour!:number;
  dateOfOrder!:Date;
  hoursOfService!:number;
  status!:number;
  customerId!:number


  constructor(id: number, priceOfHour: number, dateOfOrder: Date, hoursOfService: number, status: number, customerId: number) {
    this.id = id;
    this.priceOfHour = priceOfHour;
    this.dateOfOrder = dateOfOrder;
    this.hoursOfService = hoursOfService;
    this.status = status;
    this.customerId = customerId;
  }
}
