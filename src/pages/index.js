import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
