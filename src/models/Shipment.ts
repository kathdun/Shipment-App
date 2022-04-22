export default class Shipment{
    id?:number;
    orderNo:string;
    date:string;
    customer:string;
    trackingNo:string;
    status: string;
    consignee:string;
  
    constructor(
        id:number,
        orderNo:string,
        date:string,
        customer:string="",
        trackingNo:string="",
        status: string="In Transit",
        consignee:string=""
       
       ) {
           this.id=id;
           this.orderNo=orderNo;
           this.date=date;
           this.customer=customer;
           this.trackingNo=trackingNo;
           this.status=status;
           this.consignee=consignee;
       }
      
   }