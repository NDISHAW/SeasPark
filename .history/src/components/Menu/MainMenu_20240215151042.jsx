import React from 'react';
import MenuItem from "./MenuItem";

// Menu Data
import menuLinks from "../../data/MenuLinks.json";
import Logo from '../Logo/Logo';

const MainMenu = ({ className }) => (
  <nav className={`main-menu text-xl ${className || ""}`}>
    <ul>
      {/* <Logo className="col gx-sm-" image="images/logo21.png" /> */}
      {/* <img src="images/logo21.png" alt="Logo" /> */}
      {menuLinks.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  </nav>
);

export default MainMenu;