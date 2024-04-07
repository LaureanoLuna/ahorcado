import { useEffect, useRef, useState } from "react";
import { fetchPalabraRandom } from "../Function/fetchPalabraRandom.mjs";
import { useLocation } from "react-router-dom";

function usePalabraRandom() {
  const { pathname } = useLocation();
  const [palabraJuego, setPalabraJuego] = useState("");
  const palabraAdivinar = useRef([]);

  const updateLocalStorage = (palabra) => {
    localStorage.setItem("palabra", palabra);
  };

  const initializePalabraAdivinar = (palabra) => {
    palabraAdivinar.current = Array(palabra.length).fill(null);
  };

  const getPalabraRandom = async () => {
    try {
      const palabra = await fetchPalabraRandom();

      if (!palabra || localStorage.getItem("palabra") === palabra) {
        getPalabraRandom(); // Retry if conditions not met
        return;
      }

      updateLocalStorage(palabra);
      setPalabraJuego(palabra);
      initializePalabraAdivinar(palabra);
    } catch (error) {
      console.error("Error al obtener la palabra:", error);
    }
  };

  useEffect(() => {
    if (pathname === "/game") {
      getPalabraRandom();
    }
  }, [pathname]);

  return { palabraJuego, palabraAdivinar, getPalabraRandom };
}

export default usePalabraRandom;
