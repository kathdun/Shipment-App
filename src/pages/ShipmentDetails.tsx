import React,{ FunctionComponent,useCallback,useEffect,useMemo,useState } from "react";
import Shipments from "../models/ShipmentData";
import ShipmentModel from "../models/Shipment";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"


type Params={
    id:string
};

type Props = {
    updateShipment: (shipment: ShipmentModel | any) => void
  }

type Field={
    value?: any,
    error?:string,
    isValid?:boolean
}

type Form={
    orderNo: Field;
    date: Field;
    customer: Field;
    trackingNo: Field;
    status:Field;
    consignee:Field;
};

const ShipmentDetails : FunctionComponent<Props>=({updateShipment}): JSX.Element=>{
    

    const navigate = useNavigate();
   
    const [form,setForm]=useState<Form>({
        orderNo: { value:"",isValid:true},
        date: { value:"",isValid:true},
        customer: { value:"",isValid:true},
        trackingNo: { value:"",isValid:true},
        status:{ value:"",isValid:true},
        consignee:{ value:"",isValid:true}
    });

    const handleInputChange=(e : React.ChangeEvent<HTMLInputElement>) =>{
        const fieldName:string=e.target.name;
        const fieldValue:string=e.target.value;
        const newField:Field={[fieldName]:{value:fieldValue}};
        setForm({...form,...newField});     
    } 

    const params = useParams();

    const [shipment, setShipment] = useState<ShipmentModel>();

   const formToShipment=(form:Form):ShipmentModel=>{
        let result:ShipmentModel=form as ShipmentModel;
        return result;
   }
   
   const dispatch: Dispatch<any> = useDispatch()
    
   const update:ShipmentModel=formToShipment(form);
   
   const updateCurrentShipment = useCallback(
     (shipment: ShipmentModel) => {dispatch(updateShipment(shipment))},
     [dispatch,update]  
     )

    useEffect(() => {
       Shipments.forEach(shipment=>{
        if(shipment.orderNo==params.orderNo){
            setShipment(shipment);  
            setForm({
                orderNo: { value:shipment.orderNo,isValid:true},
                date: { value:shipment.date,isValid:true},
                customer: { value:shipment.customer,isValid:true},
                trackingNo: { value:shipment.trackingNo,isValid:true},
                status:{ value:shipment.status,isValid:true},
                consignee:{ value:shipment.consignee,isValid:true}
            })
        }

        
    
       }) 
        
    },[shipment]);


   
    
        
    return(
        <div className="page-header min-vh-75">
            <div className="container card">
                <div className=" ">
                    <div className="bg-gradient-white  pt-4 pb-3">
                        <h6 className="text-dark text-capitalize ps-3">Shipment Details </h6>
                    </div>
                </div>
                <div className="row  p-0 position-relative mt-n4 z-index-3">
                    <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                        <div className="card card-plain">
                            <div className="card-body ">
                                <label className="form-label">orderNo</label>
                                <div className="input-group input-group-outline mb-4 ">
                                    <label className="form-label"></label>
                                    <input type="text" value={form.orderNo.value} className="form-control px-4 py-2" readOnly/>
                                </div>
                                <label className="form-label">customer</label>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label"></label>
                                    <input type="text" name="customer" value={form.customer.value} onChange={e=>handleInputChange(e)} className="form-control" />
                                </div>
                                <label className="form-label">status</label>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label"></label>
                                    <input type="text" name="status" value={form.status.value} onChange={e=>handleInputChange(e)} className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                        <div className="card-body">
                        <label className="form-label">Date</label>
                                <div className="input-group input-group-outline mb-4 ">
                                    <label className="form-label"></label>
                                    <input type="text" name="date" value={form.date.value} onChange={e=>handleInputChange(e)} className="form-control px-4 py-2" />
                                </div>
                                <label className="form-label">trackingNo</label>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label"></label>
                                    <input type="text" name="trackingNo" value={form.trackingNo.value} onChange={e=>handleInputChange(e)} className="form-control" />
                                </div>
                                <label className="form-label">consignee</label>
                                <div className="input-group input-group-outline mb-4">
                                    <label className="form-label"></label>
                                    <input type="text" name="consignee" value={form.consignee.value} onChange={e=>handleInputChange(e)} className="form-control" />
                                </div>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="bg-gradient-white text-end  pt-4 pb-3">
                    <Link to={'/shipments'} className="btn bg-gradient-danger mx-2 mb-0" >&nbsp;&nbsp;Back</Link>
                        <button className="btn bg-gradient-info mb-0" onClick={()=>{updateCurrentShipment(update); navigate('/shipments');}} >&nbsp;&nbsp;Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShipmentDetails;