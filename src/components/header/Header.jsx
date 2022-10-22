import React, { useState } from "react";
import "./Header.css";
import TeslaLogo from "../../assets/logo.svg";
import cancel from "../../assets/cross.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header_container">
      <a className="logo">
        <img src={TeslaLogo} alt="tesla logo" />
      </a>

      <div className="menu_bar">
        <a href="#">Models S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </div>

      <div className="right_menu">
        <a href="#" className="not_responsive">
          Shop
        </a>
        <a href="#" className="not_responsive">
          Account
        </a>
        <a href="#" className="dropdown" onClick={() => setMenuOpen(true)}>
          Menu
        </a>
      </div>

      {menuOpen && (
        <div className="menu_dropdown">
          <div className="cancel">
            <img src={cancel} alt="cancel" onClick={() => setMenuOpen(false)} />
          </div>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">CyberTruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
