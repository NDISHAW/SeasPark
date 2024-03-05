// 

import React from "react";
import { Link } from "react-router-dom";

const TeamBoxOne = ({ to, desgination, image, name, className }) => (
  <div className={`team-style2 ${className || ""}`}>
    <div className="team-img">
      {/* Use Link component to navigate to the team details page */}
      <Link to={to}>
        <img src={image} alt="teamMember" />
      </Link>
      <div className="team-social">
        {" "}
        <Link to="#">
          <i className="fab fa-facebook-f" />
        </Link>
        <Link to="#">
          <i className="fab fa-twitter" />
        </Link>
        <Link to="#">
          <i className="fab fa-instagram" />
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin" />
        </Link>
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title h5">
        {/* Use Link component to navigate to the team details page */}
        <Link className="text-inherit" to={to}>
          {name}
        </Link>
      </h3>
      <h4 className="team-degi">{desgination}</h4>
    </div>
  </div>
);

export default TeamBoxOne;