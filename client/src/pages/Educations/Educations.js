import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Educations.css";

const Educations = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-5 p-5 mb-1 text-center font-Lato text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "green" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2022 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title font-playfair fw-bold">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">BPUT, Odisha</h4>
            <p>Master of Computer Application.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "green" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2019 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title font-playfair fw-bold">B.Sc</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Utkal University, Odisha
            </h4>
            <p>B.Sc Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "green" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title font-playfair fw-bold">Schooling</h3>
            <h4 className="vertical-timeline-element-subtitle">CHSE, Odisha</h4>
            <p>Council of Higher Secondary Education,Odisha.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Educations;
