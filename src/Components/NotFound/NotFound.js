import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div style={{minHeight: '400px'}}  className="row align-items-center">
                    <h3 className="text-center">Page Not Found</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;