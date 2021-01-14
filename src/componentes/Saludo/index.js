import React, { useState } from "react";

const Saludo = () => {
  const [saludos, setSaludos] = useState(0);
  const label = `🙌 ${saludos} ${saludos === 1 ? "Saludo" : "saludos"}`;

  return (
    <button
      style={{
        background: "rebeccapurple",
        border: "none",
        color: "white",
        fontSize: "20.25rem",
      }}
      onClick={() => {
        setSaludos(saludos + 1);
      }}
    >
      {label}
    </button>
  );
};

export default Saludo;
