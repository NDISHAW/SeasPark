import React from 'react'
import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
import teamMembers from "../../data/team.json";

export default function CareerOne({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="container">
        <div className="row">
          <TitleWrap className="text-center">
            <SecTitle className="h1 text-capitalize">
              Career Options <br />{" "}
            </SecTitle>{" "}
          </TitleWrap>
          <br /> <br />
          {teamMembers.teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
              <Career
                to={`/team-details/${member.id}`}
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
}
