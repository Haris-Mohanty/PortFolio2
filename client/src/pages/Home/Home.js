import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();

  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={28} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <Fade top>
            <h1>Hi ! I'm a</h1>
          </Fade>
          <Fade right>
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
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a className="btn btn-hire" href="https://api.whatsapp.com?phone=8658763042">Hire Me!</a>
              <button className="btn btn-hire">Hire me!</button>
              <button className="btn btn-cv">My Resume</button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
