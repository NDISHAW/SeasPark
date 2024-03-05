import React, { useState, useRef } from "react";
import {VideoModal} from '../';
import ReactPlayer from "react-player";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


const PlayBtn = ({
  id,
  title,
  className,
  children,
  onHide,
  show,
  ...restProps
}) => {
  const form = useRef();
  //   const formHandle = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const formData = new FormData();
  //       formData.append("fullName", fullName);
  //       formData.append("email", email);
  //       formData.append("phoneNumber", phoneNumber);
  //       formData.append("jobNumber", jobNumber);
  //       formData.append("my_file", file);

  //       await axios.post("/api/send-email", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //       toast.success("Email sent successfully");
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Error sending email");
  //     }
  //   };
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
          show={modalShow}
          onHide={modalCloseHandler}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <form
              ref={form}
              onSubmit={formHandle}
              className="row gx-20 form-style1"
            >
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
                <input
                  type="number"
                  placeholder="JOB Number"
                  defaultValue={id}
                />

                {/* </input> */}
              </div>
              <div className="col-12 form-group">
                {/* <textarea
                  name="message"
                  id="message"
                  placeholder="Type Your Message"
                /> */}
                <label>Attach file:</label>
                <input type="file" name="my_file"></input>
                {/* <textarea
                  name="message"
                  placeholder="Message"
                  onChange={formHandle}
                  required
                ></textarea> */}
                {/* <input type="text" rows={20} placeholder="type your message" /> */}
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



// PlayBtn.js
// import React, { useState, useRef } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Button } from "../";
// import Modal from "react-bootstrap/Modal";

// const PlayBtn = ({
//   id,
//   title,
//   className,
//   children,
//   onHide,
//   show,
//   ...restProps
// }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [jobNumber, setJobNumber] = useState("");
//   const [file, setFile] = useState(null);

//   const formHandle = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("fullName", fullName);
//       formData.append("email", email);
//       formData.append("phoneNumber", phoneNumber);
//       formData.append("jobNumber", jobNumber);
//       formData.append("my_file", file);

//       await axios.post("/api/send-email", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       toast.success("Email sent successfully");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error sending email");
//     }
//   };

//   return (
//     <React.Fragment>
//       <Modal
//         className="video-modal"
//         {...restProps}
//         show={show}
//         onHide={onHide}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Body>
//           {/* <form onSubmit={formHandle} className="row gx-20 form-style1"> */}
//           <form action="#" className="row gx-20 form-style1">
//             <h2 className="form-title h4">{title}</h2>
//             <div className="col-md-6 form-group">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>
//             <div className="col-md-6 form-group">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="col-md-6 form-group">
//               <input
//                 type="number"
//                 placeholder="Phone Number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <div className="col-md-6 form-group">
//               <input
//                 type="number"
//                 placeholder="JOB Number"
//                 defaultValue={id}
//                 onChange={(e) => setJobNumber(e.target.value)}
//               />
//             </div>
//             <div className="col-12 form-group">
//               <label>Attach file:</label>
//               <input
//                 type="file"
//                 name="my_file"
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </div>
//             <div className="col-12 text-center">
//               <Button onclick={formHandle}>
//                 SUBMIT
//                 <i className="far fa-arrow-right" />
//               </Button>
//             </div>
//           </form>
//           <button className="modal-closer" onClick={onHide}>
//             <i className="far fa-times" />
//           </button>
//         </Modal.Body>
//       </Modal>
//       <button className={`play-btn ${className || ""}`} onClick={onHide}>
//         {children}
//       </button>
//     </React.Fragment>
//   );
// };

// export default PlayBtn;
