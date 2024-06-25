import React, { useEffect } from "react";
import { useGameContext } from "../Context/ContextGame";

export default function TimerGame() {
  const { timer } = useGameContext();

  const timerOn = () => {
    const dom = document.getElementById("timer-on");
    if (dom) {
      // Si el timer es menor o igual a 5, el color del texto es rojo
      // Si es mayor a 5, el color del texto es blanco
      dom.style.color = timer <= 5 ? "red" : "white";
    }
  };

  useEffect(() => {
    timerOn();
  }, [timer]);

  return (
    <div
      id="timer-on"
      className="content"
      style={{
        width: "100%",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      {timer} seg
    </div>
  );
}
