import React from "react";
import Headers from "../Header";
import Footer from "../Footer";

export default function MainLayout(props) {
  return (
    <div id="MainLayout">
      <Headers />
      {props.children}
      <Footer />
    </div>
  );
}
