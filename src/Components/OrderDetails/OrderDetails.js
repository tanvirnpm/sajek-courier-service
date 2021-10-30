import React, { useEffect } from "react";
import { useParams } from "react-router";

const OrderDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/serviceDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("id back from server", result);
      });
  }, []);
  return <div>order details id {id}</div>;
};

export default OrderDetails;
