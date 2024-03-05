import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {VideoModal} from '../';
import ReactPlayer from "react-player";
import { Button } from "../";
import Modal from "react-bootstrap/Modal";


const PlayBtn = ({
  id,
  title,
  className,
  children,
  onHide,
  show,
  ...restProps
}) => {
  const [modalShow, setModalShow] = useState(false);

    const form = useRef();
  const modalOpenHandler = () => {
    setModalShow(true);
  };
  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_xmmshxs",
        form.current,
        "Z0CbWT44L2zlf5Ag-"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  const modalCloseHandler = () => {
    setModalShow(false);
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
            <form
              ref={form}
              onSubmit={sendEmail}
              className="row gx-20 form-style1"
            >
              <h2 className="form-title h4">{title}</h2>
              <div className="col-md-6 form-group">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="col-md-6 form-group">
                <input  type="email"
                  name="user_email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  placeholder="Email "
                  required />
              </div>
              <div className="col-md-6 form-group">
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className="col-md-6 form-group">
                <input type="number" placeholder="JOB Number" value={id} />

                {/* </input> */}
              </div>
              <div className="col-12 form-group">
                {/* <textarea
                  name="message"
                  id="message"
                  placeholder="Type Your Message"
                /> */}
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                {/* <input type="text" rows={20} placeholder="type your message" /> */}
              </div>
              <div className="col-12 text-center">
                <Button onclick={sendEmail}>
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
      <button
        className={`play-btn ${className || ""}`}
        onClick={modalOpenHandler}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default PlayBtn;