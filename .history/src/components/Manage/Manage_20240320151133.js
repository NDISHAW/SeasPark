import React, { useContext, useEffect, useState } from "react";
import CareerBox from "../../components/TeamBox/CareerBox";
// import Loader from "../Loader";
import { useStateValue } from "../../context/StateProvider";
import { getAllCareers } from "../../utils/firebaseFunctions";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../../utils/firebase.config";
import { CareerContext } from "../../context/CareerContext";
// import ProjectSingle from "../Projects/ProjectSingle";
import { Button, InfoMedia, List, PlayBtn, SecTitle } from "../../components";

const Manage = ({ onCareerClick, ...restProps }) => {
  const { careers } = useContext(CareerContext);
  console.log("====================================");
  console.log("career1", careers);
  console.log("====================================");

  return (
    <div {...restProps} className="space-top space-extra-bottom">
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
              <div className="container space-extra-bottom">
                <div className="row">
                  <div className="col-lg-8">
                    {item && (
                      <>
                        <SecTitle className="h4">{item.title}</SecTitle>
                        <List className="list-style2">
                          {/* <List.Item>
                            <i className="fas fa-check-circle" />
                            {item.experience}
                          </List.Item> */}
                          <List.Item>
                            <i className="fas fa-check-circle" />
                            Experience: {item.experience}
                          </List.Item>
                          {/* <List.Item>
                            <i className="fas fa-map-marker-alt" />
                            Nairobi
                          </List.Item> */}
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
                        info={item.category}
                      />
                      <InfoMedia
                        icon="fas fa-calendar-alt"
                        title="Date:"
                        info={item.created_at}
                      />
                      <InfoMedia
                        icon="fas fa-map-marker-alt"
                        title="Address:"
                        info={item.address}
                      />
                    </div>
                    <PlayBtn className="style5" title={item.title} id={item.id}>
                      <Button className="style1 ">
                        Edit
                        <i className="far fa-edit" />
                      </Button>
                    </PlayBtn>
                    <PlayBtn className="style5" title={item.title} id={item.id}>
                      <Button className="style1 background-red ">
                        Delete
                        <i className="far fa-trash" />
                      </Button>
                    </PlayBtn>
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

export default Manage;
