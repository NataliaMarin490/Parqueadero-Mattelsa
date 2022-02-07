import React from "react";
import CellCard from "../../visitorPage/cellCard/CellCard";
import "./styles.css";

const EntryForm = () => {
  return (
    <div className="entryForm-container">
      <h3>Ingreso Empleado</h3>
      <form>
        <input
          type="text"
          name="entryID"
          placeholder="Placa o cédula"
          required
        />
        <input type="date" />
        <input type="number" placeholder="Celda" required />
        <CellCard />
        <button type="button">Ingresar</button>
      </form>
    </div>
  );
};

export default EntryForm;
