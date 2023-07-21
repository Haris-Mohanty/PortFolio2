import React from "react";
import "./Menus.css";
import profilePic from "./../../Assets/Images/profile-pic.png";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic animate__animated animate__fadeIn">
            <img src={profilePic} alt="Profile Pic" />
          </div>
          <div className="nav-items animate__animated animate__slideInLeft">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcReadingEbook />
                Education
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBiotech />
                Tech Stack
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcVideoProjector />
                Projects
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="exp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcPortraitMode />
                Experience
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBusinessContact />
                Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items animate__animated animate__slideInRight">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Eduction" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
