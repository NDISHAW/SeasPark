import React from 'react';
import {TeamBoxOne} from '../../components';

const TeamFour = ({ ...restProps }) => (
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
            name="Alexander Mason"
            desgination="Founder & CEO"
            image="images/team/t-1-3.jpg"
          />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <TeamBoxOne
            path="/team-details"
            name="Maverick Cameron"
            desgination="Pro Developer"
            image="images/team/t-1-4.jpg"
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
            name="Marian Widjya"
            desgination="Team Leader"
            image="images/team/t-1-6.jpg"
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