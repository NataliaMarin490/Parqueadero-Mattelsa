import React from "react";
import "./styles.css";

const LicensePlateCard = () => {
  return (
    <div className="employee-container">
      <div className="licensePlate-card">
        <span>Cédula: </span>
        <span>Placa: </span>
        <span>Modelo: </span>
        <span>Puertas: </span>
        <figure>
          <img src="" alt="photo" />
        </figure>
      </div>
      <button type="button">Ingresar</button>
    </div>
  );
};

export default LicensePlateCard;
