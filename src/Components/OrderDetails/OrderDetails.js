import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";

const OrderDetails = () => {
  const [seviceDetails, setServiceDetails] = useState({})
  const {name, thumbnil, price, serviceDetail} = seviceDetails;
  const { id } = useParams();
  const testData = {
    serviceId: id

  }
  useEffect(() => {
    fetch("http://localhost:5000/serviceDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData),
    })
      .then((res) => res.json())
      .then((result) => setServiceDetails(result));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={seviceDetails.thumbnil} alt="" className="fluid" />
            <h1 className="text-center">{name}</h1>
            <h1 className="text-center">{price}</h1>
            <h1 className="text-center">{serviceDetail}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
