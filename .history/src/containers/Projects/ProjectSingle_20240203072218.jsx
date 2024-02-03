import React, { useState } from "react";
import {
  InfoMedia,
  SecSubTitle,
  SecTitle,
  List,
  TitleWrap,
  ContactWidget,
  Button,
} from "../../components";
import Modal from "./modal";


const ProjectSingle = ({ career, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "70%",
      left: "70%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-30%, -30%)",
      maxWidth: "100%",
      width: "100%",
    },
    overlay: {
      padding: "8rem",
    },
  };  
    function openModal(labReagent) {
      setIsOpen(true);
    }
  function closeModal() {
    setIsOpen(true);
  }
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
              {/* <i className="far fa-long-arrow-right" /> */}
            </Button>
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
              open={isOpen}
              style={customStyles}
            >
              <button
                onClick={() => {
                  closeModal();
                }}
                className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
              >
                <i
                  class="fa-sharp fa-solid fa-xmark"
                  style={`color: #74C0FC`}
                ></i>
                <form action="#" className="row gx-20 form-style2">
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
                    <select>
                      <option defaultValue="nothing">Select subject</option>
                      <option defaultValue="Web Development">
                        Web Development
                      </option>
                      <option defaultValue="UI Design">UI Design</option>
                      <option defaultValue="CMS Development">
                        CMS Development
                      </option>
                      <option defaultValue="Theme Development">
                        Theme Development
                      </option>
                      <option defaultValue="Wordpress Development">
                        Wordpress Development
                      </option>
                    </select>
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Your Message"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Button>
                      SUBMIT
                      <i className="far fa-arrow-right" />
                    </Button>
                  </div>
                </form>
              </button>
            </Modal>
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
}



export default ProjectSingle;