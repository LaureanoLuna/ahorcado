import { useEffect, useRef, useState } from "react";
import { fetchPalabraRandom } from "../Function/fetchPalabraRandom.mjs";
import { useLocation } from "react-router-dom";

/**
 * Hook personalizado para manejar la lógica de obtener una palabra aleatoria y
 * preparar los estados necesarios para el juego de adivinanza de palabras.
 */
function usePalabraRandom() {
  // Obtener la ruta actual usando react-router
  const { pathname } = useLocation();

  // Estado para almacenar la palabra de juego
  const [palabraJuego, setPalabraJuego] = useState("");

  //Estado para almacenar las palabras ya jugadas
  const [palabrasJugadas, setPalabrasJugadas] = useState([]);

  // Referencia para almacenar la palabra a adivinar, inicializada como un array vacío
  const palabraAdivinar = useRef([]);

  // Referencia para almacenar las pistas brindadas desde la IA
  const pistasIA = useRef([]);

  /**
   * Actualiza el almacenamiento en la variable con la palabra dada.
   * @param {string} palabra - La palabra a almacenar.
   */
  const updatePalabrasJugadas = (palabra) => {
    setPalabrasJugadas((prevPalabrasJugadas) => [
      ...prevPalabrasJugadas,
      palabra,
    ]);
  };

  /**
   * Inicializa la palabra a adivinar como un array de la misma longitud que la palabra de juego,
   * con todos los valores establecidos en null.
   * @param {string} palabra - La palabra de juego.
   */
  const initializePalabraAdivinar = (palabra) => {
    palabraAdivinar.current = Array(palabra.length).fill(null);
  };

  /**
   * Obtiene una palabra aleatoria del servidor y actualiza los estados correspondientes.
   * Si la palabra obtenida es la misma que la almacenada en el local storage, intenta obtener otra palabra.
   */
  const getPalabraRandom = async () => {
    try {
      const { palabra, pistas } = await fetchPalabraRandom();

      const pal = await palabra.palabra;
      
      if (!pal || palabrasJugadas.includes(pal)) {
        getPalabraRandom(); // Reintentar si las condiciones no se cumplen
        return;
      }

      // Actualizar local storage, estado de la palabra de juego y palabra a adivinar
      updatePalabrasJugadas(pal);
      setPalabraJuego(pal);
      pistasIA.current = pistas;
      initializePalabraAdivinar(pal);
    } catch (error) {
      console.error("Error al obtener la palabra:", error);
    }
  };

  /**
   * Efecto que se ejecuta cuando la ruta cambia.
   * Si la ruta es "/game", se obtiene una nueva palabra aleatoria.
   */
  useEffect(() => {
    if (pathname === "/game") {
      getPalabraRandom();
    }
  }, [pathname]);

  // Retornar los estados y funciones necesarios para el manejo de la palabra aleatoria
  return {
    palabraJuego,
    palabraAdivinar,
    getPalabraRandom,
    palabrasJugadas,
    pistasIA,
  };
}

export default usePalabraRandom;
