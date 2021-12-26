import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {
  return (
    <div id="Header">
      <div className="main-header-menu">
        <Link to="/" className="link-header">Dashboard</Link>
        <Link to="/about" className="link-header">About us</Link>
        <Link to="/help" className="link-header">Help</Link>
      </div>
      <div className="main-header-login-container">
       
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/sign-up" className="signup-button">Sign Up</Link>
      </div>
    </div>
  );
}
