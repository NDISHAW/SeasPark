import React from 'react';
import {
  InfoMedia,
  SecSubTitle,
  SecTitle,
  List,
  TitleWrap,
  ContactWidget,
} from "../../components";

const ProjectSingle = ({ career, ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {/* <div className="mb-3 pb-3">
            <img src="/images/careers/career1.jpg" alt="Project" />
          </div> */}
          <h2 className="h4">{career.title}</h2>
          <List className="list-style2">
            {/* {item.feature.map((list, index) => ( */}
            <List.Item>
              <i className="fas fa-check-circle" />
              Job Description
            </List.Item>
            <List.Item>
              <i className="fas fa-check-circle" />
              Exp: 2-3 yrs
            </List.Item>
            <List.Item>
              <i className="fas fa-check-circle" />
              Nairobi
            </List.Item>
            <List.Item>
              <i className="fas fa-check-circle" />
              Job No: 010 {career.id}
            </List.Item>
            {/* ))} */}
          </List>
          <p>
            Holisticly benchmark functional products before excellent methods of
            empowerment. Seamlessly visualize innovative web-readiness whereas
            extensive initiatives. Completely unleash frictionless data via
            end-to-end services. Continually unleash virtual e-tailers through
            magnetic core competencies. Interactively engage distributed
            alignments via focused alignments. Dynamically fabricate excellent
            innovation for go forward technology. Intrinsicly impact empowered
            scenarios after cost effective outsourcing. Synergistically
            productivate pandemic e-business rather than state of the art
            e-tailers. Continually expedite customized information with go
            forward potentialities.
          </p>
          <h3 className="h5 pt-xl-3">Job Description</h3>
          <p>
            Interactively engage distributed alignments via focused alignments.
            Dynamically fabricate excellent innovation for go forward
            technology. Intrinsicly impact empowered scenarios after cost
            effective outsourcing. Synergistically productivate pandemic
            e-business rather than state of the art e-tailers.
          </p>
          {/* <div
            className="row pt-xl-1 mb-xl-2   wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="col-sm-6 mb-30">
              <img src="/images/project/p-d-1-2.jpg" alt="project" />
            </div>
            <div className="col-sm-6 mb-30">
              <img src="/images/project/p-d-1-3.jpg" alt="project" />
            </div>
          </div> */}
          <p className="mb-4">
            Completely unleash frictionless data via end-to-end services.
            Continually unleash virtual e-tailers through magnetic core
            competencies. Interactively engage distributed alignments via
            focused alignments. Dynamically fabricate excellent innovation for
            go forward technology. Intrinsicly impact empowered scenarios after
            cost effective outsourcing. Synergistically productivate pandemic
            e-business rather than state...
          </p>
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
          <ContactWidget
            title="Need Any Help?"
            text="Need Any Help, Call Us 24/7 For Support"
            bgImage="images/bg/sidebox-bg-1-1.jpg"
          >
            <ContactWidget.Info>
              <i className="fas fa-phone-alt" />
              <a href="tel:+254780 170 536">(+254) 780 170 536</a>
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
          </ContactWidget>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectSingle;