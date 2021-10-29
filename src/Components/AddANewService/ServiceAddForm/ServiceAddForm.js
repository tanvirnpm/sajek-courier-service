import React from 'react';
import { useForm } from "react-hook-form";

const ServiceAddForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                    <input className="form-control" type="file" id="serviceThumbnil" {...register("thumbnil")} />
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