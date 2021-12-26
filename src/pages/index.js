import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Dashboard from "./Dashboard";
import Help from "./Help";

function App(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/help" element={<Help />} />
    </Routes>
  );
}

export default App;
