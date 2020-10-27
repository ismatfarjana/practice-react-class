import React from "react";
import logo from "./../assets/logo.gif"; // Tell webpack this JS file uses this image
import "../App.css";

const Header = () => {
  // Import result is the URL of image
  return <img src={logo} className="logo" alt="Logo" />;
};

export default Header;
