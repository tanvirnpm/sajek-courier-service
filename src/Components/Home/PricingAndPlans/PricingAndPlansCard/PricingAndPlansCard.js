import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PricingAndPlansCard = ({ pricingAndPlan, makeOrder, id }) => {
    const { name, thumbnil, price, serviceDetail } = pricingAndPlan;
    return (
        <div className="col-md-4">
            <div className="card d-fl">
                <img src={thumbnil} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{serviceDetail}</p>
                    <Link to={`/order/details/${id}`} onClick={() => makeOrder(id)} className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingAndPlansCard;