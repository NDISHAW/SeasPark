import React, { useState } from "react";
import {
  InfoMedia,
  SecSubTitle,
  SecTitle,
  List,
  TitleWrap,
  ContactWidget,
  Button,
  PlayBtn,
} from "../../components";
import Modal from "./modal";
import { ToastBar, Toaster } from "react-hot-toast";
// import Modal from "react-bootstrap/Modal";

const ProjectSingle = ({ career, ...restProps }) => {

  return (
    <div {...restProps}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Toaster>
              {(t) => (
                <ToastBar
                  toast={t}
                  style={{
                    ...t.style,
                    animation: t.visible
                      ? "custom-enter 1s ease"
                      : "custom-exit 1s ease",
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                  }}
                />
              )}
            </Toaster>
            {/* <div className="mb-3 pb-3">
            <img src="/images/careers/career1.jpg" alt="Project" />
          </div> */}
            <h2 className="h4">{career.title}</h2>
            <List className="list-style2">
              {career.descriptions.map((list, index) => (
                <List.Item key={index}>
                  <i className="fas fa-check-circle" />
                  {list.description}
                </List.Item>
                // <List.Item>
                //   <i className="fas fa-check-circle" />
                //   Exp: 2-3 yrs
                // </List.Item>
                // <List.Item>
                //   <i className="fas fa-map-marker-alt" />
                //   Nairobi
                // </List.Item>
                // <List.Item>
                //   <i className="fas fa-check-circle" />
                //   Job No: 010 {career.id}
                // </List.Item>
              ))}
            </List>
            <h3 className="h5 pt-xl-3">Job Description:</h3>
            <p>
              <List className="list-style3">
                {/* {item.feature.map((list, index) => ( */}
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                {/* ))} */}
              </List>
            </p>
            <h3 className="h5 pt-xl-3">Requirements:</h3>
            <p className="mb-4">
              <List className="list-style3">
                {/* {item.feature.map((list, index) => ( */}
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Interactively engage distributed alignments via focused
                  alignments.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Dynamically fabricate excellent innovation for go forward
                  technology.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Intrinsicly impact empowered scenarios after cost effective
                  outsourcing.
                </List.Item>
                <List.Item>
                  <i className="fas fa-check-circle" />
                  Synergistically productivate pandemic e-business rather than
                  state of the art e-tailers.
                </List.Item>
                {/* ))} */}
              </List>
            </p>
            {/* <Button className="style1" onclick={openModal}>
              Apply Now
              <i className="far fa-long-arrow-right" />
            </Button> */}
            <PlayBtn className="style5" title={career.title} id={career.id}>
              <Button className="style1">
                Apply Now
                <i className="far fa-long-arrow-right" />
              </Button>
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
                info="IT Solution, Technology"
              />
              <InfoMedia
                icon="fas fa-calendar-alt"
                title="Date:"
                info="25 March, 2022"
              />
              <InfoMedia
                icon="fas fa-map-marker-alt"
                title="Address:"
                info="Sasio Rd, Off Lunga Lunga Rd, Nairobi-Kenya"
              />
            </div>
            {/* <ContactWidget
              title="Need Any Help?"
              text="Call Us 24/7 For Support"
              bgImage="images/bg/sidebox-bg-1-1.jpg"
            >
              <ContactWidget.Info>
                <i className="fas fa-phone-alt" />
                <a href="tel:+254  780 170 536">(+254) 780 170 536</a>
              </ContactWidget.Info>
              <ContactWidget.Info>
                <i className="fas fa-envelope" />
                <a href="mailto:info@seaspark.co.ke">info@seaspark.co.ke</a>
              </ContactWidget.Info>
              <ContactWidget.Info>
                <i className="fas fa-map-marker-alt" />
                Sasio Rd, Off Lunga Lunga Rd,
                <br />
                Nairobi-Kenya
              </ContactWidget.Info>
            </ContactWidget> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
