import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ className }) => (
  <Link className={`vs-logo ${className || ""}`} to="/">
    <img src="/images/logo211.png" alt="Logo" />
  </Link>
);

export default Logo;
