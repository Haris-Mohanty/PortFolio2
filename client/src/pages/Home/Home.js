import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
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
        </div>
      </div>
    </>
  );
};

export default Home;
