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
                            <Link className="nav-link text-white" to="/submit-listing">Submit Listing</Link>
                        </div>
                    </div>
                    <div className="col-md-2 text-white">
                        <h3>Quick Links</h3>
                        <div className="d-flex flex-column">
                            <Link className="nav-link text-white" to="/about">About</Link>
                            <Link className="nav-link text-white" to="/project">Project</Link>
                            <Link className="nav-link text-white" to="/our-team">Our Team</Link>
                            <Link className="nav-link text-white" to="/tearms-conditions">Tearms Conditions</Link>
                            <Link className="nav-link text-white" to="/submit-listing">Submit Listing</Link>
                        </div>
                    </div>
                    <div className="col-md-4 text-white">
                        <h3>About Us</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos qui illum ipsum debitis fuga beatae laborum fugit esse vel nihil.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;