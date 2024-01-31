import React,{useState} from 'react';
import {TeamBoxOne} from '../../components';

const TeamFour = ({ ...restProps }) =>{


  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  // Function to handle team member click
  const handleTeamMemberClick = (teamMember) => {
    setSelectedTeamMember(teamMember);
  };

return (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        <SecSubTitle className="h1 text-capitalize">
          Our Team Of Experts
        </SecSubTitle>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Dennis Kibunja"
            desgination="Lead SAP Consultant"
            image="images/team/Dennis.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Timothy Mbogo"
            desgination="Lead SAP Developer"
            image="images/team/Timothy.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Anne Nderi"
            desgination="ERP Consultant"
            image="images/team/Anne.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Richard O. Omboga"
            desgination="Software Engineer"
            image="images/team/t-2-4.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Angela K. Thomas"
            desgination="Human Resource Officer"
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
}

export default TeamFour;