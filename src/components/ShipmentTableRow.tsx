import React,{ FunctionComponent } from "react";
import ShipmentModel from "../models/Shipment";
import { useNavigate } from 'react-router';


type Props={
    shipment:ShipmentModel,
    onDelete: (orderNo:string)=>void
};



const Shipment : FunctionComponent<Props>=({shipment,onDelete})=>{

    const navigate=useNavigate();
    const goToShipment=(id:string)=>{
        navigate(`/shipment/${id}`);
    }

    
    return(
        <tr className="py-5"> 
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.orderNo}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.date}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.customer}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.trackingNo}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.status}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{shipment.consignee}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex px-2 py-1">
                    <div className="d-flex flex-row justify-content-between">
                    <button className="btn bg-gradient-info mx-1" onClick={()=>goToShipment(shipment.orderNo)} ><i className="material-icons text-sm">contact_mail</i></button>
                    <button className="btn bg-gradient-primary mx-1"  onClick={()=>onDelete(shipment.orderNo)} ><i className="material-icons text-sm">close</i></button>
                    </div>
                </div>
            </td>
        </tr>
    );
}
export default Shipment;

