import React from "react";
import imgGameOver from "../Img/gameOver.png";


export default function GameOver() {
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
