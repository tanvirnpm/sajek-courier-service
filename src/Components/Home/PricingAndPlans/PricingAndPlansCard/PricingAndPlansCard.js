import React from 'react';
import { Link } from 'react-router-dom';

const PricingAndPlansCard = ({ pricingAndPlan }) => {
    const { id, name, thumbnil, price, serviceDetail } = pricingAndPlan;
    return (
        <div className="col-md-4">
            <div class="card">
                <img src={thumbnil} class="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{serviceDetail}</p>
                    <Link to="/plan-details" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingAndPlansCard;