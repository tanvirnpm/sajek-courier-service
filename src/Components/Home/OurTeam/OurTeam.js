import React from 'react';
import OurTeamCard from './OurTeamCard/OurTeamCard';

const OurTeam = () => {
    return (
        <section className="container my-5">
            <div className="d-flex flex-column justify-content-center text-center mb-5">
                <h1 className="pb-3">Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quia ab consectetur sed molestiae iste dolore maiores culpa sit quam?</p>
            </div>
            <div className="row g-3">
                <OurTeamCard />
                <OurTeamCard />
                <OurTeamCard />
                <OurTeamCard />
            </div>
        </section>
    );
};

export default OurTeam;