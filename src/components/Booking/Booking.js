import React from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const { state } = location;

  console.log(state);
  return <div>Booking</div>;
}

export default Booking;
