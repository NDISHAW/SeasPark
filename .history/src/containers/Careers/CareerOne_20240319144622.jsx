// import React, { useState, useEffect } from "react";
// import { TeamBoxOne, SecTitle, TitleWrap } from "../../components";
// import teamMembers from "../../data/team.json";
// import CareerBox from '../../components/TeamBox/CareerBox';
// // import careers from "../../data/careers.json";
// import axios from "axios";

// export default function CareerOne({ ...restProps }) {
//     const [careers, setCareers] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost:5000/api/careers"
//           );
//           setCareers(response.data);
//         } catch (error) {
//           console.error("Error fetching job openings:", error);
//         }
//       };
//       fetchData();
//     }, []);
//   return (
//     <div {...restProps}>
//       <div className="about-shape1 d-none d-xl-block">SeasPark</div>
//       <div className="container">
//         <div className="row">
//           {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
//           <TitleWrap className="text-center">
//             <SecTitle className="h1 text-capitalize">
//               Job Openings <br />{" "}
//             </SecTitle>{" "}
//           </TitleWrap>
//           <br /> <br />
//           {careers.map((item) => (
//             <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
//               <CareerBox
//                 path={`/careers-details/${item.id}`}
//                 // image={item.image}
//                 image={`/images/icon/process-2-2.png`}
//                 icon={item.icon}
//                 title={item.title}
//                 text={item.descriptions.slice(0, 53)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className="about-shape1 d-none d-xl-block">SeasPark</div> */}
//     </div>
//   );
// }


// CareerOne.js
import React, { useContext, useEffect, useState } from 'react';
import CareerBox from '../../components/TeamBox/CareerBox';
import Loader from '../Loader';
import { useStateValue } from '../../context/StateProvider';
import { getAllCareers } from '../../utils/firebaseFunctions';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firestore } from '../../utils/firebase.config';
import { CareerContext } from '../../context/CareerContext';
import ProjectSingle from '../Projects/ProjectSingle';
import { InfoMedia, List, PlayBtn, SecTitle } from '../../components';

const CareerOne = ({ onCareerClick, ...restProps }) => {
  const { careers } = useContext(CareerContext);
  console.log("====================================");
  console.log("career1", careers);
  console.log("====================================");
  // const [{ careers, LabReagents, cartShow }, dispatch] = useStateValue();
  //   const [careers, setCareers] = useState(false);
  // const getAllCareers = async () => {
  //   const items = await getDocs(
  //     query(collection(firestore, "careers"))
  //   );
  //     console.log(items);
  //   return items.docs.map((doc) => doc.data());
  // };

  //  useEffect(() => {
  //    getAllCareers();
  //  }, []);

  //  if (!careers) {
  //    // Optional: You can render a loading spinner or message while data is being fetched.
  //    return <div>Loading...</div>;
  //  }

  return (
    <div {...restProps}>
      <div className="container">
        <div className="row">
          {careers.map((item) => (
            <div key={item.id}>
              {/* <CareerBox
                path={`/careers-details/${item.id}`}
                image={`/images/icon/process-2-2.png`}
                icon={item.icon}
                title={item.title}
                text={item.descriptions.slice(1, 3)}
                onClick={() => onCareerClick(item)} // Pass the entire career object to the click handler
              /> */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    {item && (
                      <>
                        <SecTitle className="h4">{item.title}</SecTitle>
                        <List className="list-style2">
                          <List.Item>
                            <i className="fas fa-check-circle" />
                            {item.experience}
                          </List.Item>
                          <List.Item>
                            <i className="fas fa-check-circle" />
                            Exp: 2-3 yrs
                          </List.Item>
                          <List.Item>
                            <i className="fas fa-map-marker-alt" />
                            Nairobi
                          </List.Item>
                          <List.Item>
                            <i className="fas fa-check-circle" />
                            Job No: 010 {item.id}
                          </List.Item>
                        </List>
                      </>
                    )}

                    {/* Render descriptions if available */}
                    {item.descriptions && (
                      <>
                        <h3 className="h5 pt-xl-3">Job Description:</h3>
                        <p>
                          <List className="list-style3">
                            {item.descriptions.map((description, index) => (
                              <List.Item key={index}>
                                <i className="fas fa-check-circle" />
                                {description}
                              </List.Item>
                            ))}
                          </List>
                        </p>
                      </>
                    )}

                    {/* Render requirements if available */}
                    {item.requirements && (
                      <>
                        <h3 className="h5 pt-xl-3">Requirements:</h3>
                        <p className="mb-4">
                          <List className="list-style3">
                            {item.requirements.map((requirement, index) => (
                              <List.Item key={index}>
                                <i className="fas fa-check-circle" />
                                {requirement}
                              </List.Item>
                            ))}
                          </List>
                        </p>
                      </>
                    )}
                    <PlayBtn
                      className="style5"
                      title={careers.title}
                      id={careers.id}
                    >
                      <button className="style1">
                        Apply Now
                        <i className="far fa-long-arrow-right" />
                      </button>
                    </PlayBtn>
                  </div>
                  <div className="col-lg-4 mt-30 mt-lg-0">
                    <div className="project-box">
                      <h3 className="project-box__title h5">Job Information</h3>
                      <InfoMedia
                        icon="fas fa-user"
                        title="Clients:"
                        info="Hilliam Zirdan"
                      />
                      <InfoMedia
                        icon="fas fa-layer-group"
                        title="Category:"
                        info={careers.category}
                      />
                      <InfoMedia
                        icon="fas fa-calendar-alt"
                        title="Date:"
                        info={careers.created_at}
                      />
                      <InfoMedia
                        icon="fas fa-map-marker-alt"
                        title="Address:"
                        info={careers.address}
                      />
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
};

export default CareerOne;