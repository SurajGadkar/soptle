import React, { useState, useEffect } from "react";
import styles from "./Flights.module.css";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import Button from "@mui/material/Button";

import { useLocation, useNavigate } from "react-router-dom";

import { flightRoutes } from "../api/api";

function Flights() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const data = state;

  const flightsAvailable = flightRoutes(
    data.source,
    data.dest,
    data.fromDate,
    data.toDate,
    data.seats
  );

  return (
    <div className={styles.mainContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flight Number</TableCell>
              <TableCell>Flight Name</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Seats Available</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flightsAvailable.map((flight) => (
              <TableRow key={flight.flightNumber}>
                <TableCell>{flight.flightNumber}</TableCell>
                <TableCell>{flight.airline}</TableCell>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.seats}</TableCell>
                <TableCell>{flight.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      width: 50,
                      height: 35,
                      color: "000",
                    }}
                    onClick={(e) => {
                      navigate("/booking", { state: flight });
                    }}
                  >
                    Book
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Flights;
