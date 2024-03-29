// import React from "react";
// import Modal from "react-bootstrap/Modal";
// import ReactPlayer from "react-player";

// const CareerModal = ({ videoLink, onHide, show, ...restProps }) => (
//   <Modal
//     className="video-modal"
//     {...restProps}
//     show={show}
//     onHide={onHide}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
//     <Modal.Body>
//       {/* <ReactPlayer
//         url={videoLink}
//         className="react-player"
//         width="100%"
//         height="100%"
//         controls
//         playing
//       /> */}
//       <form className="form-style1">
//         <h2 className="form-title h4">title</h2>
//         <div className="form-group">
//           <input type="text" placeholder="Enter Full Name" />
//         </div>
//         <div className="form-group">
//           <input type="text" placeholder="Email Address" />
//         </div>
//         <div className="form-group">
//           <input type="text" placeholder="Appointment Subject" />
//         </div>
//         <div className="form-group">
//           <input type="text" placeholder="Appointment Date" />
//         </div>
//         <div className="form-group">
//           <textarea placeholder="Write a short message..." />
//         </div>
//         <div className="form-btn">
//           {/* <<Button className="style5" onclick={formHandle}>
//             {btnText}
//             <i className="far fa-arrow-right" />
//           </Button>> */}
//         </div>
//       </form>
//       <button className="modal-closer" onClick={onHide}>
//         <i className="far fa-times" />
//       </button>
//     </Modal.Body>
//   </Modal>
// );

// export default CareerModal;




import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";

const CareerModal = ({ title, id, onHide }) => {
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_u07hvsd",
        form.current,
        "Z0CbWT44L2zlf5Ag-"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div>
      <Toaster />
      <form ref={form} onSubmit={sendEmail} className="row gx-20 form-style1">
        <h2 className="form-title h4">
          <input name="title" type="text" value={title} hidden />
          {title}
        </h2>
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="col-12 text-center">
          <Button>
            SUBMIT
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </form>
      <button className="modal-closer" onClick={onHide}>
        <i className="far fa-times" />
      </button>
    </div>
  );
};

export default ModalForm;