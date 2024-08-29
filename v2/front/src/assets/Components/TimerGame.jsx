import React, { useEffect, useRef } from "react";
import useTimerGame from "../Hooks/useTimerGame.mjs";
import { useGameContext } from "../Context/ContextGame";

export default function TimerGame() {
  const { timer } = useTimerGame();
  const { gameOver, setIsGameOver } = useGameContext();
  const timerRef = useRef(null);

  useEffect(() => {
    updateTimerColor();
    checkGameOver();
  }, [timer]);

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