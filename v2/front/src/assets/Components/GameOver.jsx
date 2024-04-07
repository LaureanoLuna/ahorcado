import React, { useEffect } from "react";
import imgGameOver from "../Img/gameOver.png";
import { useNavigate } from "react-router-dom";

export default function GameOver() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
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
      <img src={imgGameOver} className="game-over-image" />
    </div>
  );
}
