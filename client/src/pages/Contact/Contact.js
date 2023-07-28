import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import contact from "./../../Assets/Images/contact.jpg";
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container contact" id="contacts">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="card1">
                <Zoom>
                  <div className="row border-line">
                    <img src={contact} alt="Contact Us" />
                  </div>
                </Zoom>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="mb-3 form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Enter Your Message"
                    className="mb-3 form-control"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button className="btn btn-primary" onClick={handleSubmit}>
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
