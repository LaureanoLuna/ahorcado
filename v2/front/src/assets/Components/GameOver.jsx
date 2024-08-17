import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMinPointGame } from "../Function/axiosPuntos";
import { useGameContext } from "../Context/ContextGame";

import imgGameOver from "../Img/gameOver.png";

// ModalCargaPuntos Component
/* function ModalCargaPuntos() {
  const handleSubmit = () => {};
  return (
    <div
      style={{
        color: "white",
        padding: "10px",
        border: "solid 2px black",
        borderRadius: "15px",
        backgroundColor: "gray",
      }}
    >
      <h2 style={{ textAlign: "justify" }}>Ingrese su Nombre</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <input
          type="text"
          name="nombre"
          id="nombre"
          style={{
            width: "80%",
            margin: "auto",
            paddingTop: "10px",
            backgroundColor: "white",
            textAlign: "center",
          }}
        />
        <button type="submit" style={{ width: "80%" }}>
          Enviar
        </button>
      </form>
    </div>
  );
} */

// GameOver Component
export default function GameOver() {
  const navigate = useNavigate();
  const { countPalabrasJugadas } = useGameContext();

  const validate = async () => {
    try {
      const response = await getMinPointGame(countPalabrasJugadas.current);

      if (!response) {
        navigate("/No tienes puntos");
        return;
      }
      navigate("/point/true");
    } catch (error) {
      console.error("Error en la validación de puntos:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      validate();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "999",
        background: "rgb(50,50,50, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imgGameOver} className="game-over-image" alt="Game Over" />
    </div>
  );
}
