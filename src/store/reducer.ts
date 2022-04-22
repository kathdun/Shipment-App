import * as actionTypes from "./ActionTypes"
import { ShipmentAction, ShipmentState } from "./type"
import SHIPMENTS from "../models/ShipmentData"
import Shipment from "../models/Shipment"


const initialState: ShipmentState = {
  shipments: SHIPMENTS,
}

const reducer = (
    state: ShipmentState = initialState,
    action: ShipmentAction
  ): ShipmentState => {
    switch (action.type) {
      case actionTypes.UPDATE_SHIPMENT:
        const newArticle: Shipment = {
          orderNo:action.shipment.orderNo,
          date:action.shipment.date,
          customer:action.shipment.customer,
          trackingNo:action.shipment.trackingNo,
          status:action.shipment.status,
          consignee:action.shipment.consignee
        }
        return {
          ...state,
          shipments: state.shipments.filter(
            shipment => shipment.orderNo !== action.shipment.orderNo).concat(newArticle)
        }
        case actionTypes.REMOVE_SHIPMENT:
          const updatedArticles: Shipment[] = state.shipments.filter(
            shipment => shipment.orderNo !== action.shipment.orderNo
          )
          
          return {
            ...state,
            shipments: updatedArticles,
          }
    }
    return state
  }
  
  export default reducer