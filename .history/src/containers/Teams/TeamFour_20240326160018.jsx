// import React from 'react';
// import {TeamBoxOne} from '../../components';

// const TeamFour = ({...restProps})=> (
//   <div {...restProps}>    
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Daniel Matthew"
//             desgination="Cheif Expert"
//             image="images/team/t-1-1.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Grayson Gabriel"
//             desgination="Head Manager"
//             image="images/team/t-1-2.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Alexander Mason"
//             desgination="Founder & CEO"
//             image="images/team/t-1-3.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Maverick Cameron"
//             desgination="Pro Developer"
//             image="images/team/t-1-4.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Marian Widjya"
//             desgination="Lead Developer"
//             image="images/team/t-1-5.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Marian Widjya"
//             desgination="Team Leader"
//             image="images/team/t-1-6.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Maverick Cameron"
//             desgination="Assistant"
//             image="images/team/t-1-7.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne path="/team-details"
//             name="Jerzzy Lamot"
//             desgination="Member"
//             image="images/team/t-1-8.jpg"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );


// export default TeamFour;



import React from "react";
import { TeamBoxOne, SecTitle, TitleWrap, InfoMedia, ImageBoxThree } from "../../components";
import teamMembers from "../../data/team.json";
import { Link } from "react-router-dom";

const TeamFour = ({ ...restProps }) => (
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
          <div
            className="about-wrap2 col-xl- background-image"
            style={{ backgroundImage: "url(images/bg/ab-bg-2-1.jpg)" }}
          >
            <div className="container">
              <div className="row gx-60">
                <div className="col-xl-12 mb-50 mb-xl-0">
                  <div className="img-box5">
                    <div className="img-1">
                      <img src={member.image} alt="About" />
                    </div>
                  </div>
                  <SecTitle className=" text-capitalize ">
                    {member.name}
                  </SecTitle>
                  <p className="mb-6 pb-2 pe-xl-12">{member.desgination}</p>
                    <p className="mb-6 pb-2 pe-xl-12">{member.biography}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TeamFour;