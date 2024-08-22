import { useEffect, useState } from "react";
import { useGameContext } from "../Context/ContextGame";

export default function useTimerGame() {
  const TIEMPO = 20;
  const [timer, setTimer] = useState(TIEMPO);
  const { gameOver } = useGameContext();

  /* const resetiarTiempo = async () => {
    setTimer(TIEMPO);
  }; */

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    if (timer === 0) gameOver.current = true;
    return () => clearInterval(intervalId);
  }, []);

  return { timer };
}
