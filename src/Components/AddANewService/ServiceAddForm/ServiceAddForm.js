import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

const ServiceAddForm = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        const sendService = {loggedUser, data}
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sendService)
        })
        .then(res=>res.json())
        .then(result=>{
            // console.log("inserted data",result)
            result.acknowledged && history.replace(from)
        })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 row">
                <label htmlFor="serviceName" className="col-xs-12 col-md-4 col-lg-2 col-form-label">Name</label>
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <input className="form-control" id="serviceName" {...register("name")} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="servicePrice" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input className="form-control" id="servicePrice" {...register("price")} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="serviceDetail" className="col-sm-2 col-form-label">Details</label>
                <div className="col-sm-10">
                    <textarea className="form-control" rows="3" placeholder="Service Details (Ex. Same day; Fast Delivey;)" id="serviceDetail" {...register("serviceDetail")} ></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="serviceThumbnil" className="col-sm-2 col-form-label">Thumbnil</label>
                <div className="col-sm-10">
                    <input className="form-control" type="text" placeholder="picture url (example: https://image.jpg)" id="serviceThumbnil" {...register("thumbnil")} />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <input className="btn btn-primary float-end" type="submit"/>
                </div>
            </div>
        </form>
    );
};

export default ServiceAddForm;