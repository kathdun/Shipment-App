import Shipment from "../models/Shipment"
import SHIPMENTS from "../models/ShipmentData" 
  
  type ShipmentState = {
    shipments: Shipment[]
  }
  
  type ShipmentAction = {
    type: string
    shipment: Shipment
  }
  
  type DispatchType = (args: ShipmentAction) => ShipmentAction