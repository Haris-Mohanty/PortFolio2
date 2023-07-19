import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="container workExp">
        <div className="work">
          <h2 className="col-12 mt-4 mb-1 text-center font-Lato text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  gray" }}
              date="2023 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title font-playfair fw-bold">
                Infosys
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Mern Stack Developer
              </h4>
              <p>I'm a Mern-Stack Developer.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
