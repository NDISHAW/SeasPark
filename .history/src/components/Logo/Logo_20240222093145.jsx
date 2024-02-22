import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ image, className }) => (
  <Link className={`vs-logo ${className || ""}`} to="/">
    <img src="images/logo21.png" alt="Logo" />
  </Link>
);

export default Logo;
