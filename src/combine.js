import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import AddNew from "./AddNew";
import BusesAvailable from "./components/BusesAvailable";
import NewReservation from "./components/NewReservation";

const combine = () => {
  const [buses, setBuses] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBuses = JSON.parse(localStorage.getItem("buses"));
    if (savedBuses) {
      setBuses(savedBuses);
    }
  }, []);

  // Save data to localStorage whenever buses array is updated
  useEffect(() => {
    localStorage.setItem("buses", JSON.stringify(buses));
  }, [buses]);

  return (
    <Container maxWidth="md">
      <AddNew buses={buses} setBuses={setBuses} />
      <BusesAvailable buses={buses} />
    </Container>
  );
};

export default combine;
