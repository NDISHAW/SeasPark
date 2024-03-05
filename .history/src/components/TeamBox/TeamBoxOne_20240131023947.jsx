// 

import React from "react";
import { Link } from "react-router-dom";

const TeamBoxOne = ({ path, desgination, image, name, className }) => (
  <div className={`team-style1 ${className || ""}`}>
    <div className="team-img">
      {/* Use Link component to navigate to the team details page */}
      <Link
        to={{
          pathname: path,
          state: { teamMember: { name, desgination, image } },
        }}
      >
        <img src={image} alt="teamMember" />
      </Link>
      <div className="team-social">{/* Social media links */}</div>
    </div>
    <div className="team-content">
      <h3 className="team-title">
        {/* Use Link component to navigate to the team details page */}
        <Link
          className="text-inherit"
          to={{
            pathname: path,
            state: { teamMember: { name, desgination, image } },
          }}
        >
          {name}
        </Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxOne;