import React,{FunctionComponent, useCallback} from 'react';
import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import ShipmentComp from './components/ShipmentTable';
import Shipment from './models/Shipment';
import ShipmentDetails from './pages/ShipmentDetails';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { updateShipment, removeShipment } from "./store/ActionCreators"
import { Dispatch } from "redux"
import { ShipmentState } from "./store/type";

const App: FunctionComponent = () => {


   const Shipments:  Shipment[] = useSelector(
      (state: ShipmentState) => state.shipments,
      shallowEqual
    )
    
    
 return (
   <Router>
      <div>
         
         {/*Barre de navigation comun a toutes les pages */}
            {/* <nav className="nav-wrapper teal">
               <div>
                  <Link to="/" className="brand-logo center">Shipments</Link>
               </div>
            </nav> */}
         {/*Systeme de gestion des routes de l'application*/}
         <Routes>
          <Route path="/"  element={<ShipmentComp />}>
          </Route>
          <Route path="/shipments"  element={<ShipmentComp />}>
          </Route>
          <Route path="/shipment/:orderNo"  element={<ShipmentDetails updateShipment={updateShipment} />}>
          </Route>
          <Route path='*'  element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Router>
 )
}
 
export default App;