import React from 'react';
import MenuItem from "./MenuItem";

// Menu Data
import menuLinks from "../../data/MenuLinks.json";
import Logo from '../Logo/Logo';

const MainMenu = ({ className }) => (
  <nav className={`main-menu text-xl ${className || ""}`}>
    <div className="col gx-sm-26 max-w-20vw">
      <ul>
        <Logo className="col gx-sm-" image="images/logo21.png" />

        {menuLinks.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  </nav>
);

export default MainMenu;