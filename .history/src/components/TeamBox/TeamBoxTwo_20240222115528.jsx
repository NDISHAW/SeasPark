import React from 'react';
import {Link} from 'react-router-dom';


const TeamBoxTwo = ({ path, desgination, image, name }) => (
  <div className="team-style2">
    <div className="team-img">
      <div className="team-shape1"></div>
      <div className="team-shape2"></div>
      <Link to={path}>
        <img src={image} className="service-icon" alt="teamavater" />
      </Link>
      <div className="team-social">
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
        {/* <Link to="#"><i className="fab fa-youtube"/></Link> */}
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title h5">
        <Link className="text-inherit" to={path}>
          {name}
        </Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxTwo;