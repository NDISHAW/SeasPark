import React from 'react'
import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
import teamMembers from "../../data/team.json";
import CareerBox from '../../components/TeamBox/CareerBox';
import careers from "../../data/careers.json";

export default function CareerOne({ ...restProps }) {
  return (
    <div {...restProps}>
      <div className="about-shape1 d-none d-xl-block">SeasPark</div>
      <div className="container">
        <div className="row">
          {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
          <TitleWrap className="text-center">
            <SecTitle className="h1 text-capitalize">
              Job Openings <br />{" "}
            </SecTitle>{" "}
          </TitleWrap>
          <br /> <br />
          {careers.map((item) => (
            
          ))}
        </div>
      </div>
      {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
    </div>
  );
}
