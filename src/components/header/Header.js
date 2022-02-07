import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo.jpg";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <LiComponent link="/employee" text="Empleados" />
          <LiComponent link="/visitor" text="Visitantes" />
          <LiComponent link="/admin" text="Administrador" />
        </ul>
      </header>
    </div>
  );
};

const LiComponent = ({ link, text }) => {
  return (
    <li>
      <Link to={link}>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default Header;
