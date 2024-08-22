import React, { useEffect, useRef } from "react";
import useTimerGame from "../Hooks/useTimerGame.mjs";
import { useGameContext } from "../Context/ContextGame";

export default function TimerGame() {
  const { timer } = useTimerGame();
  const { gameOver } = useGameContext();
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.style.color = timer <= 5 ? "red" : "white";
    }

    if (timer === 0) {
      gameOver.current = true;
    }
  }, [timer]);

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
