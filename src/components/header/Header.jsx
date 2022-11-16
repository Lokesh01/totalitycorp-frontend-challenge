import React, { useState } from "react";
import "./Header.css";
import TeslaLogo from "../../assets/logo.svg";
import cancel from "../../assets/cross.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header_container">
      <a className="logo" href="https://teslaclone08.netlify.app/">
        <img src={TeslaLogo} alt="tesla logo" />
      </a>

      <div className="menu_bar">
        <a href="https://www.tesla.com/models">Models S</a>

        <a href="https://www.tesla.com/model3">Model 3</a>

        <a href="https://www.tesla.com/modelx">Model X</a>

        <a href="https://www.tesla.com/modely">Model Y</a>

        <a href="https://www.tesla.com/solarroof">Solar Roof</a>

        <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
      </div>

      <div className="right_menu">
        <a href="https://shop.tesla.com/" className="not_responsive">
          Shop
        </a>
        <a
          href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US"
          className="not_responsive"
        >
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
            <a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200">
              Existing Inventory
            </a>
          </li>
          <li>
            <a href="https://www.tesla.com/inventory/used/m3?arrangeby=plh&zip=95113">
              Used Inventory
            </a>
          </li>
          <li>
            <a href="https://www.tesla.com/inventory/used/m3?arrangeby=plh&zip=95113">
              Trade-In
            </a>
          </li>
          <li>
            <a href="https://www.tesla.com/drive">Test Drive</a>
          </li>
          <li>
            <a href="https://www.tesla.com/insurance">Insurance</a>
          </li>
          <li>
            <a href="https://www.tesla.com/cybertruck">CyberTruck</a>
          </li>
          <li>
            <a href="https://www.tesla.com/roadster">Roadster</a>
          </li>
          <li>
            <a href="https://www.tesla.com/semi">Semi</a>
          </li>
          <li>
            <a href="https://www.tesla.com/charging">Charging</a>
          </li>
          <li>
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
          </li>
          <li>
            <a href="https://www.tesla.com/commercial">Commercial Energy</a>
          </li>
          <li>
            <a href="https://www.tesla.com/utilities">Utilities</a>
          </li>
          <li>
            <a href="https://www.tesla.com/findus?v=2&bounds=56.43696625818648%2C-44.686524625000004%2C18.435801235312205%2C-153.846680875&zoom=4&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty">
              Find Us
            </a>
          </li>
          <li>
            <a href="https://www.tesla.com/support">Support</a>
          </li>
          <li>
            <a href="https://ir.tesla.com/#quarterly-disclosure">
              Investor Relations
            </a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
