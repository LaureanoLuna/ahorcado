import React, { useState, useEffect } from "react";
import { useGameContext } from "../Context/ContextGame";

export default function TimerGame() {
  const [timer, setTimer] = useState(10);
  const { setIsGameOver } = useGameContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timerElement = document.getElementById("timer-on");

    if (timer <= 5) {
      timerElement.style.color = "red";
    } else {
      timerElement.style.color = "white";
    }

    if (timer === 0) {
      setIsGameOver(true);
    }
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
