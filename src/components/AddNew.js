import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  addNewMain: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginLeft: "50px",
    marginRight: "50px",
  },
  addNewNo: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  arrivalDeparture: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  fromTo: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
  },
  addNewHead: {
    textAlign: "center",
  },
});

const AddNew = () => {
  //array of bus information state
  const [buses, setBuses] = useState([]);

  //input field state
  const [busNo, setBusNo] = useState("");
  const [driverName, setDriverName] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleAddNewBus = (e) => {
    let bus = {
      id: Date.now(),
      busNo,
      driverName,
      arrival,
      departure,
      source,
      destination,
    };
    setBuses([...buses, bus]);
    setBusNo("");
    setDriverName("");
    setArrival("");
    setDeparture("");
    setSource("");
    setDestination("");
  };

  //saving data to localStorage
  useEffect(() => {
    localStorage.setItem("buses", JSON.stringify(buses));
  }, [buses]);

  const classes = useStyles();
  return (
    <Container>
      <div className={classes.addNewMain}>
        <div className={classes.addNewNo}>
          <Typography variant="h2" className={classes.addNewHead}>
            Add Bus Details
          </Typography>

          <TextField
            id="outlined-basic"
            label="Enter Bus Number"
            variant="outlined"
            onChange={(e) => setBusNo(e.target.value)}
            value={busNo}
          />
          <TextField
            id="outlined-basic"
            label="Driver's Name"
            variant="outlined"
            onChange={(e) => setDriverName(e.target.value)}
            value={driverName}
          />
        </div>
        <div className={classes.arrivalDeparture}>
          <TextField
            id="outlined-basic"
            label="Arrival Time"
            variant="outlined"
            onChange={(e) => setArrival(e.target.value)}
            value={arrival}
          />
          <TextField
            id="outlined-basic"
            label="Departure Time"
            variant="outlined"
            onChange={(e) => setDeparture(e.target.value)}
            value={departure}
          />
        </div>
        <div className={classes.fromTo}>
          <TextField
            id="outlined-basic"
            label="From"
            variant="outlined"
            onChange={(e) => setSource(e.target.value)}
            value={source}
          />
          <TextField
            id="outlined-basic"
            label="To"
            variant="outlined"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </div>
        <div className={classes.addBtn}>
          <Button variant="contained" onClick={handleAddNewBus}>
            Add
          </Button>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AddNew;
