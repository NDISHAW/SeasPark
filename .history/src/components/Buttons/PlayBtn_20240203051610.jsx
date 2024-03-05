import React, {useState} from 'react';
import {VideoModal} from '../';


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

  const modalOpenHandler = () => {
    setModalShow(true);
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
          show={show}
          onHide={onHide}
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