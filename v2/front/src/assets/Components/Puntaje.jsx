import React from "react";

export default function Puntaje({ nombre, puntos }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1em",
        borderBottom: "1px solid white ",
        borderRadius: "2px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <span style={{ width: "25%" }}>{nombre}</span>
      <span style={{ width: "25%" }}>
        {puntos}{" "}
        <span style={{ fontStyle: "italic", fontSize: "15px" }}>Palabras</span>
      </span>
    </div>
  );
}
