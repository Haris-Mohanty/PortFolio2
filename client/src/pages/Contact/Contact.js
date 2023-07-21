import React from "react";
import "./Contact.css";
import contact from "./../../Assets/Images/contact.jpg";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="card1">
                <div className="row border-line">
                  <img src={contact} alt="Contact Us" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 mt-5">
                <div className="row">
                  <h6>
                    Contact with:
                    <BsLinkedin color="blue" className="ms-3" size={29} />
                    <BsGithub color="black" className="ms-3" size={29} />
                    <BsFacebook color="blue" className="ms-3" size={29} />
                    <BsTwitter color="aqua" className="ms-3" size={29} />
                  </h6>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="mb-3 form-control"
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="mb-3 form-control"
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Enter Your Message"
                    className="mb-3 form-control"
                  />
                </div>
                <div className="row px-3">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
