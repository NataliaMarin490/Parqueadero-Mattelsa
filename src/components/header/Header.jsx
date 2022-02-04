import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo.jpg";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">
              {<LiComponent />}
              <img src={Logo} alt="logo" />
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

const LiComponent = () => {
  <span>Hola</span>;
};

export default Header;
