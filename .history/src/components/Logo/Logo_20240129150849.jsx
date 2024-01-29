import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ image, className}) => (
  <Link className={`media-icon ${className || ''}`} to="/">
    <img src={image} alt="Logo" />
  </Link>
);

export default Logo;
