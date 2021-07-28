import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="airvironment">
        <Link to="/">
          <span className="air header-span-opacity">air</span>
          <span>vironment</span>
        </Link>
      </div>
      <div className="navigation">
        <span className="data ">all data</span>
        <span className="average">averages</span>
      </div>
    </div>
  );
};

export default Header;
