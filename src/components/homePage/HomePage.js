import React from "react";
import Header from "../header/Header";
import MainCard from "./mainCard/MainCard";
import Employee from "../homePage/mainCard/assets/employee-icon.png";
import Visitor from "../homePage/mainCard/assets/visitor-icon.png";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="mainCard-container">
        <MainCard text="Empleados" img={Employee} link="/employee" />
        <MainCard text="Visitantes" img={Visitor} link="/visitor" />
      </div>
    </div>
  );
};

export default HomePage;
