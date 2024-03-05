import React from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import { HeaderTwo, TeamSingle, FooterOne } from "../containers";
import { useParams } from "react-router-dom";
import teamMembers from "../data/team.json";

const TeamDetails = () => {
  const { id } = useParams();
  const teamMember = teamMembers.teamMembers.find(
    (member) => member.id === parseInt(id)
  );

  return (
    <>
      <Seo title="Team Details" />
      <HeaderTwo />
      <Breadcrumb pageName="Team Details" bgImage="/images/team/details.jpg" />
      {teamMember && (
        <TeamSingle
          className="space-top space-extra-bottom"
          teamMember={teamMember}
        />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </>
  );
};

export default TeamDetails;
