// 

import React from "react";
import { Link } from "react-router-dom";

const TeamBoxOne = ({ to, desgination, image, name, className }) => (
  <div className={`team-style1 ${className || ""}`}>
    <div className="team-img">
      {/* Use Link component to navigate to the team details page */}
      <Link to={to}>
        <img src={image} className="" alt="teamMember" />
      </Link>
      <div className="team-social">
        {" "}
        <Link to="#">
          <i className="fab fa-facebook-f" />
        </Link>
        <Link to="#">
          <i className="fab fa-twitter" />
        </Link>
        <Link to="#">{/* <i className="fab fa-instagram" /> */}</Link>
        <Link to="#">
          <i className="fab fa-linkedin" />
        </Link>
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title">
        {/* Use Link component to navigate to the team details page */}
        <Link className="text-inherit" to={to}>
          {name}
        </Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
    <div className={`team-style1 ${className || ""}`}>
      <div className="col-lg-7 col-xl-7 align-self-center mb-30">
        <div className="team-about">
          <h3 className="team-title h5">
            {/* {teamMember ? teamMember.name : "Unknown Name"} */}
            {.name}
          </h3>
          <span className="team-degi">
            <p className="team-degi">
              {/* <SecTitle className="h4 text-capitalize"> */}
              {teamMember ? teamMember.desgination : "NULL"}
              {/* </SecTitle> */}
            </p>
          </span>
          {/* Display teamMember data if available, otherwise use default text */}
          <p className="team-text">
            {teamMember
              ? teamMember.biography || "No biography available for now."
              : "Team member details not found."}
          </p>
          <div className="row">
            {/* <div className="col-sm-6">
              <InfoMedia
                className="team-media"
                icon="fas fa-user"
                title="Experience"
                info={
                  teamMember ? teamMember.experience || "Not specified" : ""
                  // teamMember.experience
                }
              />
            </div> */}
          </div>
          <div className="onepage-nav">
            {/* <Button onclick={scrollHandler} path="#team-contact">
              Get In Touch
              <i className="far fa-arrow-right" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamBoxOne;