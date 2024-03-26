// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
// import { Button } from "../";
// import axios from "axios";

// const FormFive = ({ title, id, onHide }) => {
//   const form = useRef();

//   const formHandle = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);

//     try {
//       // Make a POST request to the server
//       const response = await axios.post(
//         "http://localhost:5000/sendContactEmail",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Email sent successfully");
//         form.current.reset(); // Reset the form
//       } else {
//         toast.error("Failed to send email");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       toast.error("Failed to send email");
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       <form ref={form} onSubmit={formHandle} className="vs-contact-form">
//         <div className="row gx-20">
//           <div className="col-md-6 form-group">
//             <input
//               name="from_name"
//               type="text"
//               placeholder="Your Name"
//               required
//             />
//             <i className="fal fa-user" />
//           </div>
//           <div className="col-md-6 form-group">
//             <input
//               name="user_email"
//               type="email"
//               placeholder="Email Address"
//               required
//             />
//             <i className="fal fa-envelope" />
//           </div>
//           <div className="col-md-6 form-group">
//             <input
//               name="phone"
//               type="text"
//               required
//               placeholder="Phone : 0712345678"
//             />
//             <i className="fal fa-phone" />
//           </div>
//           <div className="col-6 form-group">
//             <select name="subject" placeholder="Select subject" required>
//               <option  disabled>Select subject</option>
//               <option value="Web Development">Web Development</option>
//               <option value="UI Design">UI Design</option>
//               <option value="CMS Development">CMS Development</option>
//               <option value="Theme Development">Theme Development</option>
//               <option value="Wordpress Development">
//                 Wordpress Development
//               </option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="col-12 form-group">
//             <textarea
//               name="message"
//               placeholder="Type Your Message"
//               required
//               autoFocus
//             />
//           </div>
//           <div className="col-12">
//             <Button type="submit">
//               Submit <i className="far fa-arrow-right" />
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default FormFive;



import React, { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";

const FormFive = ({ title, id, onHide }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000sendContactEmail/sendContactEmail", formData);
      if (response.status === 200) {
        toast.success("Email sent successfully");
        form.current.reset(); // Reset the form
        setFormData({
          from_name: "",
          user_email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
  };

  return (
    <>
      <Toaster />
      <form ref={form} onSubmit={formHandle} className="vs-contact-form">
        <div className="row gx-20">
          <div className="col-md-6 form-group">
            <input
              name="from_name"
              type="text"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <i className="fal fa-user" />
          </div>
          <div className="col-md-6 form-group">
            <input
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <i className="fal fa-envelope" />
          </div>
          <div className="col-md-6 form-group">
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone : 0712345678"
            />
            <i className="fal fa-phone" />
          </div>
          <div className="col-6 form-group">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Select subject"
              required
            >
              <option value="" disabled>
                Select subject
              </option>
              <option value="Web Development">Web Development</option>
              <option value="UI Design">UI Design</option>
              <option value="CMS Development">CMS Development</option>
              <option value="Theme Development">Theme Development</option>
              <option value="Wordpress Development">
                Wordpress Development
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-12 form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message"
              required
              autoFocus
            />
          </div>
          <div className="col-12">
            <Button type="submit">
              Submit <i className="far fa-arrow-right" />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormFive;