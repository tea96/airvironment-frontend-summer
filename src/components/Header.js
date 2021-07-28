import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <span className="airvironment">
        <span className="air header-span-opacity">air</span>
        <span>vironment</span>
      </span>
      <div className="navigation">
        <span className="data ">all data</span>
        <span className="average">averages</span>
      </div>
    </div>
  );
};

export default Header;
