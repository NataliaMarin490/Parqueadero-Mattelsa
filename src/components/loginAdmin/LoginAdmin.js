import React from "react";
import "./styles.css";

const LoginAdmin = () => {
  return (
    <div className="login-container"> 
      <h1>Iniciar Sesión</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico" 
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">Acceder</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
