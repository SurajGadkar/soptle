export const flights1 = {
  flights: [
    {
      origin: "New York",
      destination: "Los Angeles",
      departureTime: "2023-06-01 09:00",
      arrivalTime: "2023-06-01 12:00",
      airline: "Delta",
      flightNumber: "DL123",
    },
    {
      origin: "London",
      destination: "Paris",
      departureTime: "2023-06-02 10:30",
      arrivalTime: "2023-06-02 12:00",
      airline: "British Airways",
      flightNumber: "BA456",
    },
    {
      origin: "Tokyo",
      destination: "Sydney",
      departureTime: "2023-06-03 14:00",
      arrivalTime: "2023-06-04 08:30",
      airline: "Japan Airlines",
      flightNumber: "JL789",
    },
    {
      origin: "Dubai",
      destination: "New York",
      departureTime: "2023-06-05 16:45",
      arrivalTime: "2023-06-05 22:30",
      airline: "Emirates",
      flightNumber: "EK987",
    },
    {
      origin: "Singapore",
      destination: "Hong Kong",
      departureTime: "2023-06-06 11:15",
      arrivalTime: "2023-06-06 13:00",
      airline: "Singapore Airlines",
      flightNumber: "SQ654",
    },
    {
      origin: "Sydney",
      destination: "Auckland",
      departureTime: "2023-06-07 09:30",
      arrivalTime: "2023-06-07 13:00",
      airline: "Qantas",
      flightNumber: "QF321",
    },
    {
      origin: "Paris",
      destination: "Rome",
      departureTime: "2023-06-08 14:45",
      arrivalTime: "2023-06-08 16:30",
      airline: "Air France",
      flightNumber: "AF765",
    },
    {
      origin: "Los Angeles",
      destination: "Las Vegas",
      departureTime: "2023-06-09 08:00",
      arrivalTime: "2023-06-09 09:15",
      airline: "Southwest Airlines",
      flightNumber: "WN987",
    },
    {
      origin: "Cape Town",
      destination: "Johannesburg",
      departureTime: "2023-06-10 13:30",
      arrivalTime: "2023-06-10 15:15",
      airline: "South African Airways",
      flightNumber: "SA456",
    },
    {
      origin: "Moscow",
      destination: "Beijing",
      departureTime: "2023-06-11 17:00",
      arrivalTime: "2023-06-12 06:45",
      airline: "Air China",
      flightNumber: "CA789",
    },
  ],
};

export const flights2 = {
  flights: [
    {
      origin: "New York",
      destination: "Los Angeles",
      departureTime: "2023-06-01 09:00",
      arrivalTime: "2023-06-01 12:00",
      airline: "Delta",
      flightNumber: "DL123",
      price: 250.0,
      seats: 150,
    },
    {
      origin: "London",
      destination: "Paris",
      departureTime: "2023-06-02 10:30",
      arrivalTime: "2023-06-02 12:00",
      airline: "British Airways",
      flightNumber: "BA456",
      price: 200.0,
      seats: 150,
    },
    {
      origin: "Tokyo",
      destination: "Sydney",
      departureTime: "2023-06-03 14:00",
      arrivalTime: "2023-06-04 08:30",
      airline: "Japan Airlines",
      flightNumber: "JL789",
      price: 400.0,
      seats: 150,
    },
    {
      origin: "Dubai",
      destination: "New York",
      departureTime: "2023-06-05 16:45",
      arrivalTime: "2023-06-05 22:30",
      airline: "Emirates",
      flightNumber: "EK987",
      price: 500.0,
      seats: 150,
    },
    {
      origin: "Singapore",
      destination: "Hong Kong",
      departureTime: "2023-06-06 11:15",
      arrivalTime: "2023-06-06 13:00",
      airline: "Singapore Airlines",
      flightNumber: "SQ654",
      price: 300.0,
      seats: 150,
    },
    {
      origin: "Sydney",
      destination: "Auckland",
      departureTime: "2023-06-07 09:30",
      arrivalTime: "2023-06-07 13:00",
      airline: "Qantas",
      flightNumber: "QF321",
      price: 350.0,
    },
    {
      origin: "Paris",
      destination: "Rome",
      departureTime: "2023-06-08 14:45",
      arrivalTime: "2023-06-08 16:30",
      airline: "Air France",
      flightNumber: "AF765",
      price: 180.0,
    },
    {
      origin: "Los Angeles",
      destination: "Las Vegas",
      departureTime: "2023-06-09 08:00",
      arrivalTime: "2023-06-09 09:15",
      airline: "Southwest Airlines",
      flightNumber: "WN987",
      price: 150.0,
      seats: 150,
    },
    {
      origin: "Cape Town",
      destination: "Johannesburg",
      departureTime: "2023-06-10 13:30",
      arrivalTime: "2023-06-10 15:15",
      airline: "South African Airways",
      flightNumber: "SA456",
      price: 220.0,
      seats: 150,
    },
    {
      origin: "Moscow",
      destination: "Beijing",
      departureTime: "2023-06-11 17:00",
      arrivalTime: "2023-06-12 06:45",
      airline: "Air China",
      flightNumber: "CA789",
      price: 380.0,
      seats: 150,
    },
  ],
};

export const flightRoutes = (source, destination, from, to, seats) => {
  const filteredFlights = flights2.flights.filter((flight) => {
    const matchingSource = source === flight.origin;
    const matchingDestination = destination === flight.destination;

    let departure = new Date(flight.departureTime);

    const dateRange = departure >= from && departure <= to;
    const seatsAvailable = flight.seats >= seats;

    return matchingSource && matchingDestination && dateRange && seatsAvailable;
  });

  return filteredFlights;
};

/*console.log(
  flightRoutes(
    "New York",
    "Los Angeles",
    new Date("2023-05-31 17:00"),
    new Date("2023-06-15 17:00"),
    5
  )
);*/
