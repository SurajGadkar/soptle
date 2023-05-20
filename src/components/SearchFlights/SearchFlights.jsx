import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

import styles from "./SearchFlights.module.css";

import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { flights2 } from "../api/api.js";
import { useNavigate } from "react-router-dom";

function SearchFlights() {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState();
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [seats, setSeats] = useState(0);

  //console.log(sourceOptions, destOptions);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "source") setSource(value);
    if (name === "dest") setDest(value);
    if (name === "seats") setSeats(value);
  };

  const handleSearch = (event) => {
    let searchData = {
      source: source,
      dest: dest,
      seats: seats,
      fromDate: fromDate,
      toDate: toDate,
    };

    if (!source || !dest || !seats || !fromDate || !toDate) {
      window.alert("All Fields are required!");
    } else {
      navigate("/search", { state: searchData });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "42ch" },
            color: "#fff",
            width: 400,
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <Select
              name="source"
              value={source}
              onChange={handleChange}
              displayEmpty
              renderValue={(source) => source || "Select a source"}
              className={styles.fullWidth}
            >
              {flights2.flights.map((option) => (
                <MenuItem key={option.flightNumber} value={option.origin}>
                  {option.origin}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Box>

        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "42ch" },
            color: "#fff",
            width: 400,
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <Select
              name="dest"
              value={dest}
              onChange={handleChange}
              displayEmpty
              renderValue={(dest) => dest || "Select a Destination"}
              className={styles.fullWidth}
            >
              {flights2.flights.map((option) => (
                <MenuItem key={option.flightNumber} value={option.destination}>
                  {option.destination}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Box>
      </div>

      <div className={styles.buttonContainer}>
        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            width: 400,
          }}
          noValidate
          autoComplete="on"
        >
          <div className={styles.dateContainer}>
            <div className={styles.center}>
              <span>From</span>
              <DatePicker
                value={fromDate}
                onChange={setFromDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
              <span>To</span>
              <DatePicker
                value={toDate}
                onChange={setToDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </Box>
        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            width: 100,
          }}
          noValidate
          autoComplete="on"
        >
          <div className={styles.center}>
            <TextField
              label="Seats"
              name="seats"
              value={seats}
              onChange={handleChange}
            />
          </div>
        </Box>
        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 50,
                color: "000",
              }}
              onClick={handleSearch}
            >
              Search Flights
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default SearchFlights;
