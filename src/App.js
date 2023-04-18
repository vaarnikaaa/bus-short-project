import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNew from "./components/AddNew";
import BusesAvailable from "./components/BusesAvailable";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addnew" element={<AddNew />} />
          <Route exact path="/busesavailable" element={<BusesAvailable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
