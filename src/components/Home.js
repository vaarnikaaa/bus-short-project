import React from "react";
import { Button, Card, Container, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Card variant="outlined" className={classes.card}>
          <div className={classes.home}>
            <div className={classes.homeHead}>
              <Typography variant="h2">Bus Information</Typography>
            </div>
            <div className={classes.homeBtn}>
              <Link to="addnew">
                <Button variant="contained">Add new Bus</Button>
              </Link>
              <Link to="busesavailable">
                <Button variant="contained">Buses Available</Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Home;

const useStyles = makeStyles({
  home: {
    display: "flex",
    flexDirection: "column",
  },
  homeHead: {
    textAlign: "center",
  },
  homeBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
});
