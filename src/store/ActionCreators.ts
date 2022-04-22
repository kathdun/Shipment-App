import * as actionTypes from "./ActionTypes"
import Shipment from "../models/Shipment"
import { DispatchType, ShipmentAction } from "./type"


export function updateShipment(shipment: Shipment) {
  const action: ShipmentAction = {
    type: actionTypes.UPDATE_SHIPMENT,
    shipment,
  }

  return simulateHttpRequest(action)
}

export function removeShipment(shipment: Shipment) {
  const action: ShipmentAction = {
    type: actionTypes.REMOVE_SHIPMENT,
    shipment,
  }
  return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: ShipmentAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}