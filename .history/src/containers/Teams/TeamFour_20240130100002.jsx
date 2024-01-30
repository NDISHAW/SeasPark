import React from 'react';
import {TeamBoxOne} from '../../components';

const TeamFour = ({ ...restProps }) => (

    // Function to handle team member click
  const handleTeamMemberClick = (teamMember) => {
    setSelectedTeamMember(teamMember);
  };
  <div {...restProps}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Dennis Kibunja"
            desgination="SAP Business One Implementation and Support Consultant||SAP Business One Project Management"
            image="images/team/Dennis.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Timothy Mbogo"
            desgination="Software Developer || SAP Certified Associate – SAP Business One Version 10"
            image="images/team/Timothy.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Anne Nderi"
            desgination="ERP consultant"
            image="images/team/Anne.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="RICHARD OKELLO OMBOGA"
            desgination="Software Engineer"
            image="images/team/t-2-4.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="ANGELA K. THOMAS"
            desgination="Human Resource Manager"
            image="images/team/t-1-6.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Marian Widjya"
            desgination="Lead Developer"
            image="images/team/t-1-5.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Maverick Cameron"
            desgination="Assistant"
            image="images/team/t-1-7.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Jerzzy Lamot"
            desgination="Member"
            image="images/team/t-1-8.jpg"
          />
        </div>
      </div>
    </div>
  </div>
);


export default TeamFour;