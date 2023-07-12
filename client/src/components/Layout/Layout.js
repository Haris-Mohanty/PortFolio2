import React, { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./layout.css";
import Home from "../../pages/Home/Home";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //Change Toggle icon
  
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar">
          <div className="sidebar-toggle-icons">
            <p>
              <AiOutlineDoubleLeft size={30} />
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
