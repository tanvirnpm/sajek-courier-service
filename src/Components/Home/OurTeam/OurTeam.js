import React from 'react';
import OurTeamCard from './OurTeamCard/OurTeamCard';

const OurTeam = () => {
    const teamMember = [
        {
            id: 1,
            name: 'Mr. Brade Lea',
            designation: 'Project Manager',
            location: 'New York',
            url: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
        },
        {
            id: 2,
            name: 'Mr. Trem Lo',
            designation: 'Delivery Executive',
            location: 'Dhaka',
            url: 'https://www.venturemat.co.uk/wp-content/uploads/2015/03/team-member-5.jpg'
        },
        {
            id: 3,
            name: 'Mr. Rakib Samdany',
            designation: 'Delivery Executive',
            location: 'Khulna',
            url: 'https://www.stridenyc.com/hubfs/Michael-Nunez.jpg'
        },
        {
            id: 4,
            name: 'Mr. Rohim Don',
            designation: 'Area Manager',
            location: 'Sylhet',
            url: 'https://www.bainbond.com/assets/images/testimonial/2.png'
        },
        {
            id: 5,
            name: 'Mr. Badol Mia',
            designation: 'Group Leader',
            location: 'Dhaka',
            url: 'https://www.arachnys.com/wp-content/uploads/2020/01/Graham-Jarvis.jpg'
        },
        {
            id: 6,
            name: 'Mr. Shipon Talukder',
            designation: 'Delivery Executive',
            location: 'Dhaka',
            url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'
        },
    ]
    return (
        <section className="container my-5">
            <div className="d-flex flex-column justify-content-center text-center mb-5">
                <h1 className="pb-3">Our Team</h1>
                <p>A courier is someone responsible for delivering goods to consumers or businesses. Couriers are different than standard deliverymen because they work individually</p>
            </div>
            <div className="row g-3">
                {
                    teamMember.map(member=> <OurTeamCard key={member.id} member={member} />)
                }
            </div>
        </section>
    );
};

export default OurTeam;