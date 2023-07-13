import React from "react";
import "./Menus.css";
import profilePic from "./../../Assets/Images/profile-pic.png";
import { FcHome } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic animate__animated animate__fadeIn">
            <img src={profilePic} alt="Profile Pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Icons</h1>
      )}
    </>
  );
};

export default Menus;
