import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

import styles from "./SearchFlights.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { flights2 } from "../api/api.js";

function SearchFlights() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState();

  const [seats, setSeats] = useState(1);

  const handleSeatChange = (event) => {
    setSeats(event.target.value);
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
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Leaving from"
            >
              {flights2.flights.map((option) => (
                <MenuItem key={option.flightNumber} value={option.origin}>
                  {option.origin}
                </MenuItem>
              ))}
            </TextField>
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
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              //defaultValue="EUR"
              helperText="Going to"
            >
              {flights2.flights.map((option) => (
                <MenuItem key={option.flightNumber} value={option.destination}>
                  {option.destination}
                </MenuItem>
              ))}
            </TextField>
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
              <DatePicker value={fromDate} onChange={setFromDate} />
            </div>
            <div>
              <span>To</span>
              <DatePicker height={100} value={toDate} onChange={setToDate} />
            </div>
          </div>
        </Box>
        <Box
          className={styles.Box}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            width: 150,
          }}
          noValidate
          autoComplete="on"
        >
          <div className={styles.center}>
            <TextField
              label="Number of seats"
              value={seats}
              onChange={handleSeatChange}
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
