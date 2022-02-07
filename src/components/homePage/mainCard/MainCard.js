import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MainCard = ({ text, img, link }) => {
  return (
    <div className="mainCards">
      <Link to={link}>
        <button type="button">{text}</button>
      </Link>
      <img src={img} alt="CardImg" />
    </div>
  );
};

export default MainCard;
