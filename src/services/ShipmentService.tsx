
import ShipmentModel from '../models/Shipment';
import http from "../http-common";


export default class ShipmentService{
   
    static getAll(): Promise<ShipmentModel[]> {
        return http.get("/shipments.json?key=5e0b62d0")
        .then(response=>response.data);
      }
    
      static get(id:string) {
        return http.get(`/shipments.json?key=5e0b62d0/${id}`);
      }
    
      static create(data:ShipmentModel) {
        return http.post("/?key=5e0b62d0",{data});
      }
    
      update(id:number, data:ShipmentModel) {
        return http.put(`/?key=5e0b62d0/${id}`, data);
      }
    
      delete(id:number) {
        return http.delete(`/?key=5e0b62d0/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/?key=5e0b62d0`);
      }

    //   findByTitle(title:string) {
    //     return http.get(`/shipment?cours=${title}`);
    //   }
    
}





