import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import { Button, List } from "../../components";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../utils/firebase.config";

const CareerEdit = ({
  id,
  title,
  data,
  experience,
  className,
  children,
  onHide,
  show,
  ...restProps
}) => {
  // const [experience, setExperience] = useState(experience);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [message, setMessage] = useState(null);

  const [pdfFile, setPdfFile] = useState(null);

  const formHandle = async (event) => {
    event.preventDefault();
    const taskDocRef = doc(firestore, "careers", id);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("experience", experience);
      formData.append("phoneNumber", phoneNumber);
      formData.append("jobNumber", id);
      formData.append("message", message);
      formData.append("title", title);
      // formData.append("id", id);
      formData.append("pdfFile", pdfFile); // Assuming pdfFile is a File object
      console.log(pdfFile);
      await updateDoc(taskDocRef, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Email sent successfully!");
      modalCloseHandler();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email");
      alert("Error sending email:", error);
    }
  };

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
            <form onSubmit={formHandle} className="row gx-80 form-style1">
              <h2 className="form-title h4">{title}</h2>
              <div className="col-md-6 form-group">
                {/* <List className="list-style2"> */}
                {/* <List.Item> */}
                {/* <i className="fas fa-check-circle" /> */}
                {}
                <input
                  type="text"
                  // placeholder="Experience"
                  value={data.experience}
                  // onChange={(e) => setExperience(e.target.value)}
                  required
                />
                {/* </List.Item>                   */}
                {/* <List.Item>
                    <i className="fas fa-check-circle" />
                    Job No: {id}
                  </List.Item> */}
                {/* </List> */}
                {/* <i className="fal fa-user" /> */}
                <input
                  type="text"
                  placeholder="address"
                  value={data.address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />{" "}
                <i className="fal fa-envelope" />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  placeholder="Enter a Valid Email Address"
                  value={data.descriptions}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
                <i className="fal fa-envelope" />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <i className="fal fa-phone" />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="number"
                  placeholder="JOB Number"
                  defaultValue={id}
                  onChange={(e) => setJobNumber(e.target.value)}
                  disabled
                  hidden
                />
                <i className="fal fa-upload " />
                <input
                  className="pt-xl-3 text-center h1"
                  type="file"
                  name="my_file"
                  onChange={(e) => setPdfFile(e.target.files[0])}
                  required
                ></input>
              </div>
              <div className="col-12 form-group "></div>
              {/* <textarea
                contenteditable
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                autofocus
              ></textarea> */}
              <div className="col-12 form-group">
                <Form.Control
                  name="message"
                  placeholder="Type in your message "
                  value={data.descriptions}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  autofocus
                  as="textarea"
                  rows={3}
                />{" "}
                <i className="fal fa-pencil"></i>
                
              </div>
              <div className="col-12 text-center">
                <Button className="vs-btn" type="submit" onClick={formHandle}>
                  SUBMIT
                  <i className="far fa-arrow-right" />
                </Button>
              </div>
            </form>

            {/* <div className="col-12 text-center">
              <Button onClick={formHandle}>Send Email</Button>
            </div> */}
          </Modal.Body>
          <button className="modal-closer " onClick={modalCloseHandler}>
            <i className="far fa-times " />
          </button>
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

export default CareerEdit;

