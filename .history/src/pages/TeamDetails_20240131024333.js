import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  TeamSingle,
  FooterOne
} from '../containers';


Certainly! Below is the modified code for your components. This includes the changes made to the TeamBoxOne component to use the Link component for navigation and pass the team member information to the TeamDetails page.

jsx
Copy code
// TeamFour.js
import React from 'react';
import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
import teamMembers from "../../data/team.json";
import { Link } from 'react-router-dom';

const TeamFour = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        <TitleWrap className="text-center">
          <SecTitle className="h1 text-capitalize">SeaSpark Team <br /> </SecTitle>{" "}
        </TitleWrap>
        <br /> <br />
        {teamMembers.teamMembers.map((member) => (
          <div
            key={member.id}
            className="col-md-6 col-lg-4 col-xl-3"
          >
            <TeamBoxOne
              path={`/team-details/${member.id}`}
              name={member.name}
              desgination={member.desgination}
              image={member.image}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TeamFour;

// TeamBoxOne.js
import React from 'react';
import { Link } from 'react-router-dom';

const TeamBoxOne = ({ path, desgination, image, name, className }) => (
  <div className={`team-style1 ${className || ''}`}>
    <div className="team-img">
      {/* Use Link component to navigate to the team details page */}
      <Link to={path}>
        <img src={image} alt="teamMember" />
      </Link>
      <div className="team-social">
        {/* Social media links */}
      </div>
    </div>
    <div className="team-content">
      <h3 className="team-title">
        {/* Use Link component to navigate to the team details page */}
        <Link className="text-inherit" to={path}>
          {name}
        </Link>
      </h3>
      <p className="team-degi">{desgination}</p>
    </div>
  </div>
);

export default TeamBoxOne;

// TeamDetails.js
import React from 'react';
import { Seo, Breadcrumb, ScrollTopBtn } from '../components';
import { HeaderOne, TeamSingle, FooterOne } from '../containers';

const TeamDetails = (props) => {
  const teamMember = props.location.state ? props.location.state.teamMember : null;

  return (
    <>
      <Seo title="Team Details" />
      <HeaderOne />
      <Breadcrumb pageName="Team Details" bgImage="images/team/details.jpg" />
      {teamMember && <TeamSingle teamMember={teamMember} />}
      <FooterOne />
      <ScrollTopBtn />
    </>
  );
};

export default TeamDetails;