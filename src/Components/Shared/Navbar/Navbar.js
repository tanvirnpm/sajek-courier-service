import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">Sajek Courier Service</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-orders">My Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manage-all-orders">Manage All Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-a-new-service">Add A New Service</Link>
                        </li>
                    </ul>
                    <div>
                        Logout
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;