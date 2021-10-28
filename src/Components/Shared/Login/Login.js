import React from 'react';
import Navbar from '../Navbar/Navbar';

const Login = () => {
    const googleIconStyle = {
        height: '30px'
    }
    return (
        <div className="vh-100 position-relative">
            <Navbar />
            <div className="position-absolute top-50 start-50 translate-middle">
                <h3 className="mb-5 text-center">Login</h3>
                <div className="border rounded-pill p-2">
                    <img style={googleIconStyle} src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <span className="ms-1">Continue With Google</span>
                </div>
            </div>
        </div>
    );
};

export default Login;