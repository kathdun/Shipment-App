import React, { FunctionComponent, useState, useEffect, JSXElementConstructor } from "react";
import Shipment from '../models/Shipment';
import SHIPMENTS from '../models/ShipmentData';
import ShipmentComp from './ShipmentTableRow';
import ShipmentService from '../services/ShipmentService';


const ShipmentList: FunctionComponent = () => {
const [shipments, setShipments] = useState<Shipment[]>([]);


const onDelete=(orderNo:string)=>{
  const filtered = shipments.filter(function(el) { return el.orderNo != orderNo }); 
  setShipments(filtered);
  console.log(shipments);
}


useEffect(() => {
    ShipmentService.getAll().then(result => {
        setShipments(result);
    });
    }, []);

// In case the API is overloaded we use data from shipment.txt
  
    useEffect(()=>{
        setShipments(SHIPMENTS);            
    }, []);

    // useEffect(()=>{
    //   const updatedData = shipments.map(x => console.log(x.orderNo +" and "+update.orderNo));
      
    //  console.log(updatedData);
     
    // },[update])

return (
    <div>
          <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Current Shipments</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ORDERNO</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">DELIVERYDATE</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">CUSTOMER</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">TRACKINGINFO</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">STATUS</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">CONSIGNEE</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                 
                  {
                  shipments.map(shipment => (
                    // getOrderNo={getOrderNo}
                        <ShipmentComp  key={shipment.orderNo} shipment={shipment} onDelete={onDelete}/>
                        ))}
            
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}
export default ShipmentList;