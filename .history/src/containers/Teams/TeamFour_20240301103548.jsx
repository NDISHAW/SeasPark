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
          // <div key={member.id} className="col-md-12 col-lg-12 col-xl-3">
          //   <TeamBoxOne
          //     biography={member.biography}
          //     name={member.name}
          //     desgination={member.desgination}
          //     image={member.image}
          //   />
          // </div>
          <div
            className="about-wrap2 col-xl-2 background-image"
            style={{ backgroundImage: "url(images/bg/ab-bg-2-1.jpg)" }}
          >
            <div className="container">
              <div className="row gx-60">
                <div className="col-xl-6 mb-50 mb-xl-0">
                  {/* <ImageBoxThree
                    imageOne={member.image}
                    // imageTwo="images/about/ab-2-2.jpg"
                    // number="100+"
                    // title="Awards We won"
                    // icon="fal fa-award"
                  /> */}
                  <div className="img-box5">
                    <div className="img-1">
                      <img src={member.image} alt="About" />
                    </div>
                  </div>
                </div>
                <div className=" col-xl-6 align-self-center text-center text-xl-start">
                  {/* <SecSubTitle>
            <i className="fas fa-bring-forward" />
            ABOUT OUR COMPANY
          </SecSubTitle> */}
                  <SecTitle>{member.name}</SecTitle>
                  <p className="mb-6 pb-2 pe-xl-12">{member.biography}</p>
                  <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
                    <div className="col-auto">
                      <InfoMedia
                        className="about-media"
                        image="images/icon/fe-1-3.png"
                        info={member.desgination}
                      />
                    </div>
                    {/* <div className="col-auto">
                      <InfoMedia
                        className="about-media"
                        image="images/icon/fe-1-3.png"
                        info="Urgent Support For Clients"
                      />
                    </div> */}
                  </div>
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