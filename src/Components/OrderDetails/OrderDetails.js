import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Navbar from "../Shared/Navbar/Navbar";

const OrderDetails = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [serviceDetails, setServiceDetails] = useState({})
  const { name, thumbnil, price, serviceDetail } = serviceDetails;
  const { id } = useParams();
  const serviceIdFromDatabase = {
    serviceId: id

  }
  const sendOrderInformation = {...serviceDetails, ...loggedUser}
  // console.log(sendOrderInformation)
  const placeAnOrder = () => {
    fetch('http://localhost:5000/makeAnOrder',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendOrderInformation)
    }).then(res=>res.json())
    .then(result=> console.log(result))
  }
  useEffect(() => {
    fetch("http://localhost:5000/serviceDetails", {
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
      <div className="container">
        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-md-6 border rounded py-5">
            <img src={thumbnil} alt="" className="fluid" />
            <h1 className="text-center">{name}</h1>
            <h1 className="text-center">{price}</h1>
            <h1 className="text-center">{serviceDetail}</h1>
            <div className="text-center">
              <button onClick={() => placeAnOrder()} className="btn btn-success mt-4">Place an order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
