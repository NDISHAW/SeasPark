import React from 'react';
import MenuItem from "./MenuItem";

// Menu Data
import menuLinks from "../../data/MenuLinks.json";
import Logo from '../Logo/Logo';

const MainMenu = ({ className }) => (
  <nav className={`main-menu text-xl ${className || ""}`}>
    <ul>
      <div className="col gx-sm-26 max-w-20vw">
        <Logo className="col gx-sm-" image="images/logo21.png" />

        {menuLinks.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </ul>
  </nav>
);

export default MainMenu;