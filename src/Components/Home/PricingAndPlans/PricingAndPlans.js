import React, { useEffect, useState } from 'react';
import PricingAndPlansCard from './PricingAndPlansCard/PricingAndPlansCard';

const PricingAndPlans = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getService')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    const makeOrder = id => {
        console.log(id);
    }
    
    return (
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="text-center mb-3">
                    <h2>PRICING & PLANS</h2>
                    <p>See our pricing & plans to get best service</p>
                </div>
            </div>
            <div className="row g-3">
                {
                    service.map(item => <PricingAndPlansCard makeOrder={makeOrder} key={item._id} id={item._id} pricingAndPlan={item.data}/>)
                }
            </div>
            
        </section>
    );
};

export default PricingAndPlans;