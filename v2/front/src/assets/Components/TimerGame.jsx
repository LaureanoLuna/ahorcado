import React, { useEffect, useRef } from "react";
import useTimerGame from "../Hooks/useTimerGame.mjs";
import { useGameContext } from "../Context/ContextGame";

export default function TimerGame() {
  const { timer, setTimer } = useTimerGame();
  const { gameOver, setIsGameOver, palabraJuego } = useGameContext();
  const timerRef = useRef(null);

  const updateTimerColor = () => {
    if (timerRef.current) {
      timerRef.current.style.color = timer <= 5 ? "red" : "white";
    }
  };

  const checkGameOver = () => {
    if (timer === 0) {
      setIsGameOver(true);
    }
  };

  useEffect(() => {
    updateTimerColor();
    checkGameOver();
  }, [timer]);

  useEffect(() => {
    setTimer(60);
  }, [palabraJuego]);

  const timerStyle = {
    width: "100%",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
  };

  return (
    <div id="timer-on" className="content" style={timerStyle} ref={timerRef}>
      {timer} seg
    </div>
  );
}
