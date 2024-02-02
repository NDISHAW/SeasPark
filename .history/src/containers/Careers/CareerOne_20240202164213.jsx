import React from 'react'
import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
import teamMembers from "../../data/team.json";
import CareerBox from '../../components/TeamBox/CareerBox';
import careers from "../../data/careers.json";

export default function CareerOne({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="container">
        <div className="row">
          <TitleWrap className="text-center">
            <SecTitle className="h1 text-capitalize">
              Job Openings <br />{" "}
            </SecTitle>{" "}
          </TitleWrap>
          <br /> <br />
          {careers.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
              <CareerBox
                path={`/careers-details/${item.id}`}
                image={item.image}
                icon={item.icon}
                title={item.title}
                text={item.text.slice(0, 53)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
