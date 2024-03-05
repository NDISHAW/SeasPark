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
// import Modal from "./modal";
import Modal from "react-bootstrap/Modal";


const ProjectSingle = ({ career, ...restProps }) => {

  const [modalShow, setModalShow] = useState(false);

  const modalOpenHandler = () => {
    setModalShow(true);
  };

  const modalCloseHandler = () => {
    setModalShow(false);
  };
  const CareerModal = ({
    className,
    id,
    title,
    onHide,
    show,
    ...restProps
  }) => {
    const formHandle = (event) => {
      event.preventDefault();
    };
    return (
      <React.Fragment>
        {modalShow && (
          // <VideoModal
          //   show={modalShow}
          //   onHide={modalCloseHandler}
          // />
          <Modal
            className="video-modal"
            {...restProps}
            show={modalShow}
            onHide={modalCloseHandler}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <form action="#" className="row gx-20 form-style1">
                <h2 className="form-title h4">{title}</h2>
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="number" placeholder="JOB Number">
                    {id}
                  </input>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type Your Message"
                  />
                </div>
                <div className="col-12 text-center">
                  <Button onclick={formHandle}>
                    SUBMIT
                    <i className="far fa-arrow-right" />
                  </Button>
                </div>
              </form>
              <button className="modal-closer" onClick={onHide}>
                <i className="far fa-times" />
              </button>
            </Modal.Body>
          </Modal>
        )}
        
      </React.Fragment>
    );
  };
  return (
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
                <i className="fas fa-map-marker-alt" />
                Nairobi
              </List.Item>
              <List.Item>
                <i className="fas fa-check-circle" />
                Job No: 010 {career.id}
              </List.Item>
              {/* ))} */}
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
            <Button className="style1" onclick={openModal}>
              Apply Now
              <i className="far fa-long-arrow-right" />
            </Button>
            <PlayBtn className="style5" title={career.title}
            // id={career.id}
            >
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
            <ContactWidget
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
            </ContactWidget>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ProjectSingle;