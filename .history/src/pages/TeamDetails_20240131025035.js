import React from 'react';
import { Seo, Breadcrumb, ScrollTopBtn } from '../components';
import { HeaderOne, TeamSingle, FooterOne } from '../containers';
import teamMembers from ''

const TeamDetails = (props) => {
  const teamMember = props.match.params.id ? 
    teamMembers.teamMembers.find(member => member.id === parseInt(props.match.params.id)) : null;

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