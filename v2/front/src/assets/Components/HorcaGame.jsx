import React from "react";
import { useGameContext } from "../Context/ContextGame";
import imgV from "../Img/HorcaViva.svg";
import imgM from "../Img/HorcaMuerta.svg";

export default function HorcaGame() {
  const { gameOver } = useGameContext();

  return (
    <div>
      {gameOver ? (
        <img className="imgGame" src={imgM} />
      ) : (
        <img className="imgGame" src={imgV} />
      )}
    </div>
  );
}
