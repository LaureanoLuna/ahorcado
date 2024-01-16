import { useEffect, useRef, useState } from "react";
import { API_TESTS } from "../../API_test";


function usePalabraRandom() {
  const [palabraJuego, setPalabraJuego] = useState("");
  const palabraAdivinar = useRef([]);

  const getPalabraRandom = () => {
    const randomIndex = Math.floor(Math.random() * API_TESTS.length);
    const palabra = API_TESTS[randomIndex];

    if (!randomIndex || localStorage.getItem("palabra") === palabra) {
      getPalabraRandom(); // Retry if conditions not met
      return;
    }

    localStorage.setItem("palabra", palabra);
    setPalabraJuego(palabra);
    palabraAdivinar.current = [...palabra.split("").fill(null)];
  };

  useEffect(() => {
    getPalabraRandom();
  }, []);

  return { palabraJuego, palabraAdivinar, getPalabraRandom };
}

export default usePalabraRandom;
