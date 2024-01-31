import React, {Fragment, } from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  TeamSingle,
  FooterOne
} from '../containers';

const TeamDetails = (props) => {
  // const teamMember = props.location.state
  //   ? props.location.state.teamMember
  //   : null;
   const teamMember =
     props.location && props.location.state
       ? props.location.state.teamMember
       : null;


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