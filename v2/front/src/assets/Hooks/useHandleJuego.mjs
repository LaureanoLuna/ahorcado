import { useEffect, useState } from "react";
import usePalabraRandom from "./usePalabraRandom";

/**
 * Hook personalizado para manejar la lógica de ingreso de letras y el estado del juego.
 */
function useHandleLetra() {
  // Obtener la palabra de juego, la palabra a adivinar y la función para obtener una nueva palabra aleatoria
  const { palabraJuego, palabraAdivinar, getPalabraRandom } = usePalabraRandom();

  // Estado para el conteo de errores
  const [errorCount, setErrorCount] = useState(0);

  /**
   * Maneja la letra ingresada por el usuario.
   * @param {string} e - La letra ingresada por el usuario.
   */
  const handleLetra = (e = null) => {
    if (e === null) return;
    const letraIngresada = e.toLowerCase();

    // Verificar si la letra está en la palabra de juego
    if (palabraJuego.includes(letraIngresada)) {
      // Actualizar la palabra a adivinar con las letras correctas
      Array.from(palabraJuego).map((letra, i) => {
        if (letra.toLowerCase() === letraIngresada) {
          palabraAdivinar.current[i] = letra;
        }
      });
    } else {
      // Incrementar el contador de errores si la letra no está en la palabra
      setErrorCount((prevErrorCount) => prevErrorCount + 1);
    }
  };

  /**
   * Reinicia la palabra de juego obteniendo una nueva palabra aleatoria.
   */
  const resetWord = () => {
    getPalabraRandom();
  };

  // Efecto que se ejecuta cuando la palabra de juego cambia
  useEffect(() => {
    handleLetra();
    setErrorCount(0);
  }, [palabraJuego]);

  // Retornar las funciones y estados necesarios para el manejo de letras y el estado del juego
  return { handleLetra, errorCount, palabraAdivinar, resetWord, palabraJuego };
}

export default useHandleLetra;
