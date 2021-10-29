import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ServiceAddForm from './ServiceAddForm/ServiceAddForm';

const AddANewService = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-8 m-auto border p-5 rounded bg-light shadow-sm">
                        <div className="text-center">
                            <h2 className="mb-5">Add A New Service</h2>
                        </div>
                        <ServiceAddForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddANewService;