import { useEffect, useState } from "react";

export default function useTimerGame() {
  const TIEMPO = 20;
  const [timer, setTimer] = useState(TIEMPO);

  const resetiarTiempo = () => {
    setTimer(TIEMPO);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return { timer, resetiarTiempo };
}
