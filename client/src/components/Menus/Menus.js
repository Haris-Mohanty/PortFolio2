import React from "react";
import "./Menus.css";
import profilePic from "./../../Assets/Images/profile-pic.png";

const Menus = () => {
  return (
    <>
      <div className="navbar-profile-pic">
        <img src={profilePic} alt="Profile Pic" />
      </div>
    </>
  );
};

export default Menus;
