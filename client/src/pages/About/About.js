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
            <h2>About Me</h2>
            <p>
              Welcome to my website! I'm a passionate and experienced MERN-stack
              web developer, dedicated to crafting robust and intuitive web
              applications. With a strong foundation in MongoDB, Express.js,
              React.js, and Node.js, I've successfully built numerous projects
              that showcase my skills and expertise.
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
              the front-end, providing a seamless user experience. I take
              immense pride in my ability to transform complex requirements into
              elegant, functional solutions. By leveraging the latest tools and
              frameworks, I ensure that my projects are not only visually
              appealing but also performant and scalable, delivering optimal
              results for my clients. Feel free to explore my portfolio and dive
              into the projects I've developed. If you have any questions or
              would like to discuss potential collaborations, please don't
              hesitate to reach out.
              <br />
              <br /> Thank You!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
