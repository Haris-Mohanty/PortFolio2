import React from "react";
import "./Projects.css";
import projectImg1 from "./../../Assets/Images/project-img1.png";
import projectImg2 from "./../../Assets/Images/project-img3.png";
import projectImg3 from "./../../Assets/Images/project-img4.png";
import projectImg4 from "./../../Assets/Images/project-img5.png";
import projectImg5 from "./../../Assets/Images/project-img6.png";
import projectImg6 from "./../../Assets/Images/project-img2.png";

const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-4 mb-1 text-center font-Lato text-uppercase">
          My Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          ➡️Here are my recent projects with live links and source code.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounder">
              <div className="card-image">
                <span className="card-notify-badge">Front End</span>
                <img src={projectImg1} alt="Project1" className="w-100" />
              </div>
              <div className="card-image-overly m-auto py-2">
                <span className="card-detail-badge px-2">HTML</span>
                <span className="card-detail-badge px-2">CSS</span>
                <span className="card-detail-badge px-2">JS</span>
                <span className="card-detail-badge px-2">Bootstrap</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Education App Development</h5>
                </div>
                <a
                  href="https://github.com/Haris-Mohanty/Education-App-Development"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
