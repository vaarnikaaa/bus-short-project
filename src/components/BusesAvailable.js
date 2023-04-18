import React, { useEffect, useState } from "react";
import { Card, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const BusesAvailable = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const storedBuses = JSON.parse(localStorage.getItem("buses"));
    if (storedBuses) {
      setBuses(storedBuses);
    }
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        List of Buses
      </Typography>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Card>
        <ul>
          {buses.map((bus) => (
            <li key={bus.id}>
              <Typography variant="subtitle1" gutterBottom>
                Bus Number: {bus.busNo}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Driver's Name: {bus.driverName}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Arrival Time: {bus.arrival}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Departure Time: {bus.departure}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Source: {bus.source}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Destination: {bus.destination}
              </Typography>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default BusesAvailable;
