import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo">
    <Link to="./web1">
      <img
        src="https://via.placeholder.com/240x60.png?text=Your%20Logo%20Here"
        title="Your logo"
        alt="Your logo"
      />
    </Link>
  </div>
);

export default Logo;
