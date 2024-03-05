import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../";

const FormFive = ({ title, id, onHide }) => {
  const form = useRef();
  const formHandle = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_xmmshxs",
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
    <form ref={form} onSubmit={formHandle} className="vs-contact-form">
      <div className="row gx-20">
        <div className="col-md-6 form-group">
          <input name="from_name" type="text" placeholder="Your Name" />
          <i className="fal fa-user" />
        </div>
        <div className="col-md-6 form-group">
          <input name="user_email" type="email" placeholder="Email Address" />
          <i className="fal fa-envelope" />
        </div>
        <div className="col-md-6 form-group">
          <input name="phone" type="text" placeholder="Phone  0712345678" />
          <i className="fal fa-envelope" />
        </div>
        <div className="col-12 form-group">
          <select name="option">
            <option defaultValue="nothing">Select subject</option>
            <option defaultValue="Web Development">Web Development</option>
            <option defaultValue="UI Design">UI Design</option>
            <option defaultValue="CMS Development">CMS Development</option>
            <option defaultValue="Theme Development">Theme Development</option>
            <option defaultValue="Wordpress Development">
              Wordpress Development
            </option>
            <option defaultValue="Wordpress Development">Other</option>
          </select>
        </div>
        <div className="col-12 form-group">
          <textarea name="message" placeholder="Type Your Message" />
        </div>
        <div className="col-12">
          <Button onclick={formHandle}>
            Submit
            <i className="far fa-arrow-right" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormFive;
