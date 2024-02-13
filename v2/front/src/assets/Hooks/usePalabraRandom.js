import { useEffect, useRef, useState } from "react";
import { fetchPalabraRandom } from "../Function/fetchPalabraRandom.mjs";

function usePalabraRandom() {
  const [palabraJuego, setPalabraJuego] = useState("");
  const palabraAdivinar = useRef([]);

  const updateLocalStorage = (palabra) => {
    /* guardamos la palabra en el localStorage, para evitar que la palabra se repita dos veces segudias */
    localStorage.setItem("palabra", palabra);
  };

  const initializePalabraAdivinar = (palabra) => {
    /* inicializamos la variable que vamos a utilizar para almacenar las letras que el usuario va ingresando que son validas en base a la palbra que tiene para adivinar  */
    palabraAdivinar.current = Array(palabra.length).fill(null);
  };

  const getPalabraRandom = async () => {
    try {
      const palabra = await fetchPalabraRandom();
      /* si la variable palabra, la cual contiene el objetivo del juego, no existe o es igual a la almacenada en el localStorage, volvemos a ejecutar la funcion */
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
    getPalabraRandom();
  }, []);

  return { palabraJuego, palabraAdivinar, getPalabraRandom };
}

export default usePalabraRandom;
