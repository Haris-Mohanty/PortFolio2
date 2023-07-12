import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Home from "../../pages/Home/Home";

const Layout = () => {
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
