import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PricingAndPlansCard = ({ pricingAndPlan, id }) => {
    const { name, thumbnil, price, serviceDetail } = pricingAndPlan;
    return (
        <div className="col-md-4">
            <div className="card d-fl">
                <img style={{height: '300px'}} src={thumbnil} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-title">Price: {price}</h6>
                    <p className="card-text"><b>Details:</b> {serviceDetail.substring(0,150)}...</p>
                    <Link to={`/order/details/${id}`} className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingAndPlansCard;