import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";
import Modal from "react-bootstrap/Modal";

const PlayBtn = ({ id, title, className, children, onHide, ...restProps }) => {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    phonenumber: "",
    id,
    title,
    message: "",
  });

  const form = useRef();

  const modalOpenHandler = () => {
    setModalShow(true);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_0wmgnbl",
        "template_u07hvsd",
        form.current,
        "Z0CbWT44L2zlf5Ag-"
      );

      // Clear form data
      form.current.reset();
      setFormData({
        from_name: "",
        user_email: "",
        phonenumber: "",
        id,
        title,
        message: "",
      });

      // Success toast message
      toast.success("Email sent Successfully");
    } catch (error) {
      console.error(error.text);
      toast.error(error.text);
    }
  };

  const modalCloseHandler = () => {
    setModalShow(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      {modalShow && (
        <Modal
          className="video-modal"
          {...restProps}
          show={modalShow}
          onHide={modalCloseHandler}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Toaster />
          <Modal.Body>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="row gx-20 form-style1"
            >
              <h2 className="form-title h4">{title}</h2>
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 form-group">
                <input type="text" name="id" value={formData.id} readOnly />
              </div>
              <div className="col-12 form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-12 text-center">
                <Button type="submit">
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
