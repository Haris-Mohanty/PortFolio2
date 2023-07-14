import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container techstack">
        <h2 className="col-12 mt-4 mb-1 text-center font-Lato">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          ➡️Including Programming Languages, Frameworks, Databases, Front-end,
          Back-end tools, APIs!
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <h1>{tech.name}</h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
