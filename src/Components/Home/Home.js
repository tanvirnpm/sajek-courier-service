import React from 'react';
import Header from './Header/Header';
import Footer from '../Shared/Footer/Footer';
import ClientReviews from './ClientReviews/ClientReviews';
import OurTeam from './OurTeam/OurTeam';
import PricingAndPlans from './PricingAndPlans/PricingAndPlans';

const Home = () => {
    return (
        <div>
            <Header />
            <PricingAndPlans />
            <ClientReviews />
            <OurTeam />
            <Footer />
        </div>
    );
};

export default Home;