import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h1>Hi ! I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Mern-stack Developer!",
                  "Coder!",
                  "Problem Solver!",
                  "Full-stack developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire me!</button>
            <button className="btn btn-cv">My Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
