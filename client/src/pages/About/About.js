import React from "react";
import "./about.css";
import profilePic from "./../../Assets/Images/profile-pic.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 about-img">
            <img src={profilePic} alt="Profile Pic" />
          </div>
          <div className="col-md-6">
            <h1 className="font-Lato fw-bold text-primary">About Me</h1>
            <hr />
            <p className="font-sofias">
              Welcome to my website! I'm{" "}
              <b className="font-Lato">Haris Mohanty</b>, a passionate
              MERN-stack web developer, dedicated to crafting robust and
              intuitive web applications. With a strong foundation in MongoDB,
              Express.js, React.js, and Node.js, I've successfully built
              numerous projects that showcase my skills and expertise.
              <br />
              <br /> My journey as a web developer has been marked by a
              relentless pursuit of excellence, combining the latest
              technologies with innovative design to create seamless user
              experiences. Each project I undertake is a testament to my
              commitment to delivering high-quality, scalable solutions that
              meet the unique needs of my clients.
              <br />
              <br /> Whether it's developing dynamic e-commerce platforms,
              interactive social networking sites, or cutting-edge web
              applications, I thrive on the challenge of turning ideas into
              reality. I leverage my expertise in front-end development,
              utilizing HTML, CSS, and JavaScript, to create captivating user
              interfaces that captivate and engage visitors. But it doesn't stop
              there. As a full-stack developer, I have a deep understanding of
              back-end development as well.
              <br />
              <br /> I harness the power of Node.js and Express.js to build
              robust APIs and server-side logic that seamlessly integrate with
              the front-end, providing a seamless user experience. Feel free to
              explore my portfolio and dive into the projects I've developed. If
              you have any questions or would like to discuss potential
              collaborations, please don't hesitate to reach out.
              <br />
              <br />
              <br /> <b className="d-flex float-end">Thank You!</b> <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
