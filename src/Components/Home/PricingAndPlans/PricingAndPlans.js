import React from 'react';
import PricingAndPlansCard from './PricingAndPlansCard/PricingAndPlansCard';

const PricingAndPlans = () => {
    const pricingAndPlans = [
        {
            id: 1,
            name: 'Standard Package',
            thumbnil: 'https://5.imimg.com/data5/JH/UP/JJ/SELLER-32732628/office-relocation-company-500x500.jpg',
            price: 120,
            serviceDetail: [
                'Lorem ipsum dolor sit Amet consectetur',
                'Cdipisicing elit sed do eiusmod tempor',
                'Incididunt ut labore et dolore magna aliquas',
                'Ut enim ad minim veniam, quis nostrud'
            ]
        },
        {
            id: 1,
            name: 'Standard Package',
            thumbnil: 'https://5.imimg.com/data5/JH/UP/JJ/SELLER-32732628/office-relocation-company-500x500.jpg',
            price: 120,
            serviceDetail: [
                'Lorem ipsum dolor sit Amet consectetur',
                'Cdipisicing elit sed do eiusmod tempor',
                'Incididunt ut labore et dolore magna aliquas',
                'Ut enim ad minim veniam, quis nostrud'
            ]
        },
        {
            id: 1,
            name: 'Standard Package',
            thumbnil: 'https://5.imimg.com/data5/JH/UP/JJ/SELLER-32732628/office-relocation-company-500x500.jpg',
            price: 120,
            serviceDetail: [
                'Lorem ipsum dolor sit Amet consectetur',
                'Cdipisicing elit sed do eiusmod tempor',
                'Incididunt ut labore et dolore magna aliquas',
                'Ut enim ad minim veniam, quis nostrud'
            ]
        },
        {
            id: 1,
            name: 'Standard Package',
            thumbnil: 'https://5.imimg.com/data5/JH/UP/JJ/SELLER-32732628/office-relocation-company-500x500.jpg',
            price: 120,
            serviceDetail: [
                'Lorem ipsum dolor sit Amet consectetur',
                'Cdipisicing elit sed do eiusmod tempor',
                'Incididunt ut labore et dolore magna aliquas',
                'Ut enim ad minim veniam, quis nostrud'
            ]
        },
    ]
    return (
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="text-center mb-5">
                    <h2>PRICING & PLANS</h2>
                    <p>See our pricing & plans to get best service</p>
                </div>
            </div>
            <div className="row">
                {
                    pricingAndPlans.map(pricingAndPlan => <PricingAndPlansCard pricingAndPlan={pricingAndPlan} />)
                }
            </div>
        </section>
    );
};

export default PricingAndPlans;