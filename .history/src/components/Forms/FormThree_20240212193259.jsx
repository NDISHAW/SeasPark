import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";

const FormThree = () => {
  const form3 = useRef();
  const formHandle = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_xmmshxs",
        form3.current,
        "Z0CbWT44L2zlf5Ag-"
      )
      .then(
        (result) => {
          console.log(result.text);
          form3.current.reset();
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form3} onSubmit={formHandle} className="row gx-20 form-style2">
        <div className="col-md-6 form-group">
          <input name="from_name" type="text" placeholder="Full Name" required/>
        </div>
        <div className="col-md-6 form-group">
          <input name="userEmail" type="email" placeholder="Email Address" required/>
        </div>
        <div className="col-md-6 form-group">
          <input name="phone" type="number" placeholder="Phone Number" required/>
        </div>
        <div className="col-md-6 form-group">
          <select name="option"required>
            <option defaultValue="nothing">Select subject</option>
            <option defaultValue="Web Development">Web Development</option>
            <option defaultValue="UI Design">UI Design</option>
            <option defaultValue="CMS Development">CMS Development</option>
            <option defaultValue="Theme Development">Theme Development</option>
            <option defaultValue="Wordpress Development">
              Wordpress Development
            </option>
          </select>
        </div>
        <div className="col-12 form-group">
          <textarea
            name="message"
            id="message"
            placeholder="Type Your Message"
          required/>
        </div>
        <div className="col-12 text-center">
          <Button onClick={formHandle}>
            SUBMIT
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormThree;