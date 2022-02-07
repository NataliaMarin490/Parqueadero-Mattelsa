import React from "react";
import "./styles.css";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <h4>Buscar empleado</h4>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Placa o cédula"
          required
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
