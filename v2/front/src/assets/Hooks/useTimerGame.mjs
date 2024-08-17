import { useEffect, useState } from "react";

export default function useTimerGame() {
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { timer, setTimer };
}
