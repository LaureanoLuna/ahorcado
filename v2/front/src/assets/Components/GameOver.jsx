import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMinPointGame } from "../Function/axiosPuntos";
import { useGameContext } from "../Context/ContextGame";
import imgGameOver from "../Img/gameOver.png";

// GameOver Component
export default function GameOver() {
  const navigate = useNavigate();
  const { countPalabrasJugadas } = useGameContext();

  const validatePoints = async () => {
    try {
      const response = await getMinPointGame(countPalabrasJugadas.current);
      if (!response) {
        navigate("/No tienes puntos");
      } else {
        navigate("/point/true");
      }
    } catch (error) {
      console.error("Error en la validación de puntos:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(validatePoints, 5000);
    return () => clearTimeout(timeoutId);
  }, []);


  const overlayStyle = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "999",
    background: "rgba(50, 50, 50, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={overlayStyle}>
      <img src={imgGameOver} className="game-over-image" alt="Game Over" />
    </div>
  );
}
