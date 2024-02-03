import React from "react";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

const CareerModal = ({ videoLink, onHide, show, ...restProps }) => (
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
      
      <button className="modal-closer" onClick={onHide}>
        <i className="far fa-times" />
      </button>
    </Modal.Body>
  </Modal>
);

export default CareerModal;
