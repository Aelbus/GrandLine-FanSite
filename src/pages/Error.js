import React from "react";
import "../styles/pages/Error.css";

const Error = () => {
  return (
    <div className="error-div">
      <div className="error-div-content">
        <p className="error-number">ERROR:404</p>
        <p className="error-text">
          Désolé. <br />À moins que vous ayez une machine à voyager dans le
          temps, ce contenu n'est pas disponible.
        </p>
      </div>
    </div>
  );
};

export default Error;
