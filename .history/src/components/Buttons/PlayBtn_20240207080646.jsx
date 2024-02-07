// import React, { useState, useRef } from "react";
// import {VideoModal} from '../';
// import ReactPlayer from "react-player";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
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
//     const form = useRef();
//     const formHandle = (event) => {
//       event.preventDefault();
//       emailjs
//         .sendForm(
//           "service_0wmgnbl",
//           "template_u07hvsd",
//           form.current,
//           "Z0CbWT44L2zlf5Ag-"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             form.current.reset();
//             toast.success("Email sent successfully");
//           },
//           (error) => {
//             console.log(error.text);
//             toast.error(error.text);
//           }
//         );
//     };
//   const [modalShow, setModalShow] = useState(false);

//   const modalOpenHandler = () => {
//     setModalShow(true);
//   };

//   const modalCloseHandler = () => {
//     setModalShow(false);
//   };

//   return (
//     <React.Fragment>
//       {modalShow && (
//         // <VideoModal
//         //   show={modalShow}
//         //   onHide={modalCloseHandler}
//         // />
//         <Modal
//           className="video-modal"
//           {...restProps}
//           show={modalShow}
//           onHide={modalCloseHandler}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Body>
//             <form
//               ref={form}
//               onSubmit={formHandle}
//               className="row gx-20 form-style1"
//             >
//               <h2 className="form-title h4">{title}</h2>
//               <div className="col-md-6 form-group">
//                 <input type="text" placeholder="Full Name" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input type="email" placeholder="Email Address" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input type="number" placeholder="Phone Number" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input
//                   type="number"
//                   placeholder="JOB Number"
//                   defaultValue={id}
//                 />

//                 {/* </input> */}
//               </div>
//               <div className="col-12 form-group">
//                 {/* <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Type Your Message"
//                 /> */}
//                 <label>Attach file:</label>
//                 <input type="file" name="my_file"></input>
//                 {/* <textarea
//                   name="message"
//                   placeholder="Message"
//                   onChange={formHandle}
//                   required
//                 ></textarea> */}
//                 {/* <input type="text" rows={20} placeholder="type your message" /> */}
//               </div>
//               <div className="col-12 text-center">
//                 <Button onclick={formHandle}>
//                   SUBMIT
//                   <i className="far fa-arrow-right" />
//                 </Button>
//               </div>
//             </form>
//             <button className="modal-closer" onClick={onHide}>
//               <i className="far fa-times" />
//             </button>
//           </Modal.Body>
//         </Modal>
//       )}
//       <button
//         className={`play-btn ${className || ""}`}
//         onClick={modalOpenHandler}
//       >
//         {children}
//       </button>
//     </React.Fragment>
//   );
// };

// export default PlayBtn;



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



import React, { useState, useRef } from "react";
import { Button } from "../";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";

const PlayBtn = ({
  id,
  title,
  className,
  children,
  onHide,
  show,
  ...restProps
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [message, setMessage] = useState(null);
  // const form = useRef();

  // const formHandle = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("fullName", fullName);
  //     formData.append("email", email);
  //     // formData.append("phoneNumber", phoneNumber);
  //     // formData.append("jobNumber", jobNumber);
  //     // formData.append("my_file", file);

  //     await axios.post("http://localhost:5000/send-email", {
  //       fullName,
  //       email,
  //     });
  //     toast.success("Email sent successfully");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Error sending email");
  //   }
  // };
 
  
  const [pdfFile, setPdfFile] = useState(null);

  const formHandle = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("jobNumber", jobNumber);
      formData.append("message", message);
      formData.append("pdfData", pdfFile);


      await axios.post("http://localhost:5000/sendEmail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Email sent successfully!");
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
          <Modal.Body>
            <form onSubmit={formHandle} className="row gx-20 form-style1">
              <h2 className="form-title h4">{title}</h2>
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="number"
                  placeholder="JOB Number"
                  defaultValue={id}
                  onChange={(e) => setJobNumber(e.target.value)}
                  disabled
                />
              </div>
              {/* <div className="col-6 form-group">
                <input
                  className="pt-xl-3 text-center h1"
                  disabled
                  type="text"
                  placeholder="Attach file:"
                />{" "}
                <i className="pt-xl-2 far fa-upload " />
              </div> */}
              <div className="col-12 form-group ">
                <input
                  className="pt-xl-3 text-center h1"
                  type="file"
                  name="my_file"
                  onChange={(e) => setPdfFile(e.target.files[0])}
                ></input>
              </div>
              {/* <textarea
                contenteditable
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                autofocus
              ></textarea> */}
              <Form.Control
                name="message"
                placeholder="Type Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                autofocus
                as="textarea"
                rows={3}
              />

              <div className="col-12 text-center">
                <Button type="submit">
                  SUBMIT
                  <i className="far fa-arrow-right" />
                </Button>
              </div>
            </form>

            <div className="col-12 text-center">
              <button onClick={formHandle}>Send Email</button>
            </div>
          </Modal.Body>
          <button className="modal-closer" onClick={modalCloseHandler}>
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

export default PlayBtn;


//  <div className="row gx-20 form-style1"> 
              // <div className="col-12 text-center">
              // <h3>Send Email with PDF Attachment</h3></div>
              // <div className="col-6 text-center">
              //   <input
              //     type="email"
              //     placeholder="Enter recipient email"
              //     value={email}
              //     onChange={(e) => setEmail(e.target.value)}
              //   />
              // </div> <br />
              // <div className="col-6 text-center">
              //   <input
              //     type="file"
              //     onChange={(e) => setPdfFile(e.target.files[0])}
              //   />
              // </div>


// import React, { useState, useRef } from "react";
// import {VideoModal} from '../';
// import ReactPlayer from "react-player";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
// import { Button } from "../";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";


// const PlayBtn = ({
//   id,
//   title,
//   className,
//   children,
//   onHide,
//   show,
//   ...restProps
// }) => {
//     const form = useRef();
// //  const formHandle = (event) => {
// //    event.preventDefault();
// //    const formData = new FormData(form.current);
// //    const data = {
// //      to: formData.get("email"), // Assuming the input's name for email is "email"
// //      subject: "Your Subject Here", // You can change this dynamically if needed
// //      text: "Your Message Here", // You can change this dynamically if needed
// //    };

// //    axios
// //      .post("http://localhost:5000/send-email", data)
// //      .then((response) => {
// //        console.log(response.data.message);
// //        form.current.reset();
// //        toast.success("Email sent successfully");
// //      })
// //      .catch((error) => {
// //        console.error("Error sending email:", error);
// //        toast.error("Error sending email");
// //      });
// //  };
// const [email, setEmail] = useState("");
// const formHandle = async (toEmail) => {
//   toEmail = user.email;
//   try {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     await axios.post("http://localhost:5000/send-email", {
//       toEmail,
//       cartItems,
//       tot,
//     });
//     toast("Email sent successfully!");
//   } catch (error) {
//     console.error(error.message);
//     alert("Failed to send email!");
//     toast(error.message);
//   }
// };
//   const [modalShow, setModalShow] = useState(false);

//   const modalOpenHandler = () => {
//     setModalShow(true);
//   };

//   const modalCloseHandler = () => {
//     setModalShow(false);
//   };

//   return (
//     <React.Fragment>
//       {modalShow && (
//         // <VideoModal
//         //   show={modalShow}
//         //   onHide={modalCloseHandler}
//         // />
//         <Modal
//           className="video-modal"
//           {...restProps}
//           show={modalShow}
//           onHide={modalCloseHandler}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Body>
//             <form
//               ref={form}
//               onSubmit={formHandle}
//               className="row gx-20 form-style1"
//             >
//               <h2 className="form-title h4">{title}</h2>
//               <div className="col-md-6 form-group">
//                 <input type="text" placeholder="Full Name" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input type="email" placeholder="Email Address" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input type="number" placeholder="Phone Number" />
//               </div>
//               <div className="col-md-6 form-group">
//                 <input
//                   type="number"
//                   placeholder="JOB Number"
//                   defaultValue={id}
//                 />

//                 {/* </input> */}
//               </div>
//               <div className="col-12 form-group">
//                 {/* <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Type Your Message"
//                 /> */}
//                 <label>Attach file:</label>
//                 {/* <input type="file" name="my_file"></input> */}
//                 {/* <textarea
//                   name="message"
//                   placeholder="Message"
//                   onChange={formHandle}
//                   required
//                 ></textarea> */}
//                 {/* <input type="text" rows={20} placeholder="type your message" /> */}
//               </div>
//               <div className="col-12 text-center">
//                 <Button onclick={formHandle}>
//                   SUBMIT
//                   <i className="far fa-arrow-right" />
//                 </Button>
//               </div>
//             </form>
//             <button className="modal-closer" onClick={onHide}>
//               <i className="far fa-times" />
//             </button>
//           </Modal.Body>
//         </Modal>
//       )}
//       <button
//         className={`play-btn ${className || ""}`}
//         onClick={modalOpenHandler}
//       >
//         {children}
//       </button>
//     </React.Fragment>
//   );
// };

// export default PlayBtn;