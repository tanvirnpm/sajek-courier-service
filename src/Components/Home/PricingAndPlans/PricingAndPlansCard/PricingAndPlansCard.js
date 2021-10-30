import React from 'react';
import { Link } from 'react-router-dom';

const PricingAndPlansCard = ({ pricingAndPlan }) => {
    // const { name, thumbnil, price, serviceDetail } = pricingAndPlan;
    console.log(pricingAndPlan.name)
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={pricingAndPlan.thumbnil} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{pricingAndPlan.name}</h5>
                    <h6 className="card-title">{pricingAndPlan.price}</h6>
                    <p className="card-text">{pricingAndPlan.serviceDetail}</p>
                    <Link to="/plan-details" className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingAndPlansCard;