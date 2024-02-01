import React from 'react'

export default function CareerOne() {
  return (
    <div {...restProps}>
      <div className="container">
        <div className="row">
          <TitleWrap className="text-center">
            <SecTitle className="h1 text-capitalize">
              SeaSpark Team <br />{" "}
            </SecTitle>{" "}
          </TitleWrap>
          <br /> <br />
          {teamMembers.teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
              <TeamBoxOne
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
