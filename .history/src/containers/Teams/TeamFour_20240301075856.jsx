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
import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
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
    className="about-wrap1 background-image"
    style={{ backgroundImage: "url(images/bg/ab-bg-2-1.jpg)" }}
  >
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-6 mb-50 mb-xl-0">
          <ImageBoxThree
            imageOne="images/about/aboutus.jpg"
            // imageTwo="images/about/ab-2-2.jpg"
            // number="100+"
            // title="Awards We won"
            // icon="fal fa-award"
          />
        </div>
        <div className=" col-xl-6 align-self-center text-center text-xl-start">
          {/* <SecSubTitle>
            <i className="fas fa-bring-forward" />
            ABOUT OUR COMPANY
          </SecSubTitle> */}
          <SecTitle>About Our Company</SecTitle>
          <p className="mb-6 pb-2 pe-xl-12">
            SeasPark Consultancy Ltd specializes in Business & Technology
            Consultancy having particular attention to Staffing & Recruiting,
            SAP Services such as SAP implementations, Roll-outs, Upgrates &
            Migrations, Expert Consultancy and SAP Licensed Sales, while our SAP
            Business Solutions portfolio includes ERP Solutions (S4HANA, SAP
            Business One, SAP Business ByDesign, SAP Business Planning &
            Consolidation, SAP EHS), Human Resource Solutions (Classic HR & SAP
            SuccessFactors), Data & Analytics Solutions (Business Intelligence -
            SAP BW on HANA & BW/4HANA, SAP HANA Data Warehouse Cloud, SAP
            Analytics Cloud) Our commitment is to deliver highly proficient
            services with cost-effectiveness on time. Our aim is to ensure that
            our services meet the highest standards, surpassing client
            expectations. Our dedicated team of professionals strives to deliver
            innovative and tailored solutions to meet the unique requirements of
            each project.
          </p>
          <div className="row gx-60 mb-4 pb-1 gy-2 text-start justify-content-center justify-content-xl-start">
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-1.png"
                info="Provide Skills Services"
              />
            </div>
            <div className="col-auto">
              <InfoMedia
                className="about-media"
                image="images/icon/ab-ic-2-2.png"
                info="Urgent Support For Clients"
              />
            </div>
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