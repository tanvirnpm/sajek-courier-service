import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary py-5">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-4 text-white">
                        <p className="mt-2">H#259, 5th Floor, Mohakhali DOHS, Mohakhali, Dhaka, Bangladesh.</p>
                    </div>
                    <div className="col-md-2 text-white">
                        <h3>Company</h3>
                        <div className="d-flex flex-column">
                            <Link className="nav-link text-white" to="/about">About</Link>
                            <Link className="nav-link text-white" to="/project">Project</Link>
                            <Link className="nav-link text-white" to="/our-team">Our Team</Link>
                            <Link className="nav-link text-white" to="/tearms-conditions">Tearms Conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-2 text-white">
                        <h3>Quick Links</h3>
                        <div className="d-flex flex-column">
                            <Link className="nav-link text-white" to="/about">About</Link>
                            <Link className="nav-link text-white" to="/project">Project</Link>
                            <Link className="nav-link text-white" to="/our-team">Our Team</Link>
                            <Link className="nav-link text-white" to="/tearms-conditions">Tearms Conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-4 text-white">
                        <h3>About Us</h3>
                        <p>We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;