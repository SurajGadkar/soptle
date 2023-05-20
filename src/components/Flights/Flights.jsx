import React from "react";
import styles from "./Flights.module.css";

import { flights2 } from "../api/api";
import { useLocation } from "react-router-dom";

import { flightRoutes } from "../api/api";

function Flights() {
  const location = useLocation();
  const { state } = location;

  const data = state;
  console.log(data);

  const flightsAvailable = flightRoutes(
    data.source,
    data.dest,
    data.fromDate,
    data.toDate,
    data.seats
  );

  console.log(flightsAvailable);

  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Flight Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Seats Available</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flightsAvailable.map((details) => {
            return (
              <tr>
                <td>{details.flightNumber}</td>
                <td>{details.airline}</td>
                <td>{details.origin}</td>
                <td>{details.destination}</td>
                <td>{details.seats}</td>
                <td>{details.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Flights;
