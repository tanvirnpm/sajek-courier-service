import React from 'react';

const OurTeamCard = ({member}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img style={{height: '400px'}} src={member.url} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {member.name}</h5>
                    <h6 className="card-sub-title">Designation: {member.designation}</h6>
                    <p className="card-text">Area/Location: {member.location}</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeamCard;