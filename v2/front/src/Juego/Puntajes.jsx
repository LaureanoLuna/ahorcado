import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import usePuntajes from "../assets/Hooks/usePuntajes.mjs";
import Puntaje from "../assets/Components/Puntaje";
import ModalCargaPuntos from "../assets/Components/ModalCargaPuntos";

export default function Puntajes() {
  const { fetchPuntajes, puntajes, error } = usePuntajes(); // Correcto nombre de función
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const { puntos, seCarga } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetchPuntajes(); // Llamada a la función fetchPuntajes
    } catch (err) {
      console.error("Error fetching puntajes:", err);
    } finally {
      setLoading(false); // Desactiva el loading al terminar
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        fontSize: "20px",
        textTransform: "uppercase",
      }}
    >
      <Link
        to="/"
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
        <ModalCargaPuntos isOpen={seCarga} puntos={puntos}/>
        {error && <div>Error: {error}</div>}
        {loading ? (
          <div>Cargando puntajes...</div> // Mensaje de carga
        ) : puntajes.length > 0 ? (
          puntajes.map((p, i) => (
            <Puntaje key={i} nombre={p.nombre} puntos={p.puntos} />
          ))
        ) : (
          <div>No hay puntajes disponibles.</div>
        )}
      </div>
    </div>
  );
}
