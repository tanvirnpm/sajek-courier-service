import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
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
  let { from } = location.state || { from: { pathname: "/my-orders" } };
  const serviceIdFromDatabase = {
    serviceId: id

  }

  // const sendOrderInformation = [ {...serviceDetails}, {...loggedUser}, {status: 'pending'} ]
  const sendOrderInformation = {
    order: {...serviceDetails},
    user: {...loggedUser},
    status: 'Pending'


  }
  // console.log(sendOrderInformation)
  console.log('logged user in order details', loggedUser)
  console.log('service in order details',serviceDetails)
  const placeAnOrder = () => {
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
            <div className="text-center">
              <button onClick={() => placeAnOrder()} className="btn btn-success mt-4">Place an order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
