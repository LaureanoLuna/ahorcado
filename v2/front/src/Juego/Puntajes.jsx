import React, { useEffect, useState } from "react";
import axios from "../assets/Function/axios";
import { Link } from "react-router-dom";

export default function Puntajes() {
  const [puntajes, setPuntajes] = useState([]);
  const [error, setError] = useState(null);

  const fetchPuntajes = async () => {
    try {
      const response = await axios.get("/");
      setPuntajes(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const PointPlay = ({ nombre, puntos }) => {
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
        <span style={{ width: "25%" }}>{puntos}</span>
      </div>
    );
  };

  useEffect(() => {
    fetchPuntajes();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        fontSize: "20px",
        textTransform:"uppercase"
      }}
    >
      <Link
        to={"/"}
        style={{
          border: "solid 1px",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        Volver
      </Link>
      <div>
        {error && <div>Error: {error}</div>}
        {puntajes.length > 0 ? (
          puntajes.map((p) => (
            <PointPlay nombre={p.nombre} puntos={p.puntos} /> // Asegúrate de usar una clave única
          ))
        ) : (
          <div>No hay puntajes disponibles.</div>
        )}
      </div>
    </div>
  );
}
