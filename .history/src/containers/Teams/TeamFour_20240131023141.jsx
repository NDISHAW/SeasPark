// import React,{useState} from 'react';
// import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
// import teamMembers from "../../data/team.json";
// import TeamSingle from './TeamSingle';

// const TeamFour = ({ ...restProps }) =>{


//   const [selectedTeamMember, setSelectedTeamMember] = useState(null);

//   // Function to handle team member click
//   const handleTeamMemberClick = (teamMember) => {
//     setSelectedTeamMember(teamMember);
//   };

// return (
//   <div {...restProps}>
//     <div className="container">
//       <div className="row">
//         <TitleWrap className="text-center">
//           <SecTitle className="h1 text-capitalize">
//             SeaSpark Team <br />{" "}
//           </SecTitle>{" "}
//         </TitleWrap>
//         <br /> <br />
//         {teamMembers.teamMembers.map((member) => (
//           <div
//             key={member.id}
//             className="col-md-6 col-lg-4 col-xl-3"
//             onClick={() => handleTeamMemberClick(member)}
//           >
//             <TeamBoxOne
//               // path="/team-details"
//               name={member.name}
//               desgination={member.desgination}
//               image={member.image}
//             />
//           </div>
//         ))}
//         {/* Display TeamSingle component if a team member is selected */}
//         {selectedTeamMember && <TeamSingle teamMember={selectedTeamMember} />}

        
//         {/* <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Dennis Kibunja"
//             desgination="Lead SAP Consultant"
//             image="images/team/Dennis.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Timothy Mbogo"
//             desgination="Lead SAP Developer"
//             image="images/team/Timothy.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Anne Nderi"
//             desgination="ERP Consultant"
//             image="images/team/Anne.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Richard O. Omboga"
//             desgination="Software Engineer"
//             image="images/team/t-2-4.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Angela K. Thomas"
//             desgination="Human Resource Officer"
//             image="images/team/t-1-6.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Marian Widjya"
//             desgination="Lead Developer"
//             image="images/team/t-1-5.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Maverick Cameron"
//             desgination="Assistant"
//             image="images/team/t-1-7.jpg"
//           />
//         </div>
//         <div className="col-md-6 col-lg-4 col-xl-3">
//           <TeamBoxOne
//             path="/team-details"
//             name="Jerzzy Lamot"
//             desgination="Member"
//             image="images/team/t-1-8.jpg"
//           />
//         </div> */}
//       </div>
//     </div>
//   </div>
// );
// }

// export default TeamFour;