import React from 'react';
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import { Button } from "../";

const VideoModal = ({className, title, onHide, show, ...restProps }) => {
    const formHandle = (event) => {
      event.preventDefault();
    };
  return (
    <Modal
      className="video-modal"
      {...restProps}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {/* <ReactPlayer
        url={videoLink}
        className="react-player"
        width="100%"
        height="100%"
        controls
        playing
      /> */}
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
            <input type="number" placeholder="JOB Number" value={id} />
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
  );
};
export default VideoModal;