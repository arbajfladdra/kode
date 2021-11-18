import React from "react";

import BrandLogo from "../assests/images/logo.svg";

const Header = () => {
  return (
    <div
      className="row bg-gray"
      style={{
        position: "fixed",
        zIndex: "10",
        top: "0",
        left: "0",
        backgroundColor: "rgba(248, 248, 248, 70%)",
      }}
    >
      <header className="header-wrapper container">
        <div className="header-item brand">
          <img src={BrandLogo} alt="" className="brand-img" />
        </div>
        <div className="header-item nav-wrapper">
          <nav className="navlinks">
            <ul className="navlink-list">
              <li className="navlink-list-item">
                <a href="">Home</a>
              </li>
              <li className="navlink-list-item">
                <a href="">Contact Us</a>
              </li>
              <li className="navlink-list-item">
                <a href="">Programs</a>
              </li>
              <li className="navlink-list-item">
                <a href="">Calender</a>
              </li>
              <li className="navlink-list-item">
                <a href="">Conatct Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
