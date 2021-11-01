import React, { useEffect, useState } from 'react';
import PricingAndPlansCard from './PricingAndPlansCard/PricingAndPlansCard';

const PricingAndPlans = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('https://fierce-cliffs-54848.herokuapp.com/getService')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
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
                    service.map(item => <PricingAndPlansCard key={item._id} id={item._id} pricingAndPlan={item.data}/>)
                }
            </div>
            
        </section>
    );
};

export default PricingAndPlans;