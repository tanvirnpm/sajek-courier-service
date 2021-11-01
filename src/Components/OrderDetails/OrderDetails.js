import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const OrderDetails = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [serviceDetails, setServiceDetails] = useState({})
  const { name, thumbnil, price, serviceDetail } = serviceDetails;
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let { from } = location.state || { from: { pathname: "/my-orders" } };
  const serviceIdFromDatabase = {
    serviceId: id

  }

  // const sendOrderInformation = [ {...serviceDetails}, {...loggedUser}, {status: 'pending'} ]
  
  // console.log(sendOrderInformation)
  // console.log('logged user in order details', loggedUser)
  // console.log('service in order details',serviceDetails)
  const placeAnOrder = (data) => {
    const sendOrderInformation = {
      order: {...serviceDetails},
      user: {...loggedUser},
      address: data,
      status: 'Pending'
    }
    fetch('https://fierce-cliffs-54848.herokuapp.com/makeAnOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendOrderInformation)
    }).then(res => res.json())
      .then(result => {
        result.acknowledged && history.replace(from)
    })
    console.log(data)
  }
  useEffect(() => {
    fetch("https://fierce-cliffs-54848.herokuapp.com/serviceDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceIdFromDatabase),
    })
      .then((res) => res.json())
      .then((result) => setServiceDetails(result));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-md-8 border rounded py-5">
            <img src={thumbnil} alt="" className="img-fluid" />
            <h5 className="text-center">Name: {name}</h5>
            <p className="text-center">Price: {price}</p>
            <p className="text-center">Details: {serviceDetail}</p>
            <form onSubmit={handleSubmit(placeAnOrder)}>
              <div className="mb-3 row">
                  <label htmlFor="contactNumber" className="col-xs-12 col-md-4 col-lg-2 col-form-label">Contact Number</label>
                  <div className="col-sm-12 col-md-12 col-lg-10">
                      <input className="form-control" id="contactNumber" {...register("contact")} />
                  </div>
              </div>
              <div className="mb-3 row">
                  <label htmlFor="address" className="col-sm-2 col-form-label">Details</label>
                  <div className="col-sm-10">
                      <textarea className="form-control" rows="3" placeholder="Full Address" id="address" {...register("address")} ></textarea>
                  </div>
              </div>
              <div className="mb-3 row">
                  <div className="col text-center">
                      {/* <input className="btn btn-primary float-end" type="submit"/> */}
                      <div className="text-center">
                        <button type="submit" className="btn btn-success mt-4">Place an order</button>
                      </div>
                  </div>
              </div>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
