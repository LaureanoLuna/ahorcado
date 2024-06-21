import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import usePalabraRandom from "../Hooks/usePalabraRandom";
import { useLocation } from "react-router-dom";

// Creación del contexto del juego
const GameContext = createContext();

// Custom hook para utilizar el contexto del juego
export const useGameContext = () => useContext(GameContext);

// Componente proveedor del contexto del juego
export const GameProvider = ({ children }) => {
  // Obtener la palabra de juego y la palabra a adivinar del hook personalizado
  const { palabraJuego, palabraAdivinar, getPalabraRandom } =
    usePalabraRandom();

  // Referencia para almacenar los puntos, inicializados en función de la longitud de la palabra
  const countPalabrasJugadas = useRef(0);

  // Obtener la ruta actual usando react-router
  const { pathname } = useLocation();

  // Estado para el conteo de errores
  const [errorCount, setErrorCount] = useState(7);

  // Estado para determinar si el juego ha terminado
  const [isGameOver, setIsGameOver] = useState(false);

  // Estado para determinar si el juego ha sido ganado
  const [isWinGame, setIsWinGame] = useState(false);

  // Manejo de las letras ingresadas por el usuario
  const handleLetter = (letter = null) => {
    if (letter === null) return;

    const lowercaseLetter = letter.toLowerCase();

    // Verificar si la letra está en la palabra de juego
    if (!palabraJuego.includes(lowercaseLetter)) {
      // Incrementar el contador de errores si la letra no está en la palabra
      errorValue();
      return;
    }
    // Actualizar la palabra a adivinar con las letras correctas
    Array.from(palabraJuego).forEach((char, index) => {
      if (char.toLowerCase() === lowercaseLetter) {
        palabraAdivinar.current[index] = char;
      }
    });

    // Verificar si la palabra ha sido completamente adivinada
    if (!valueWord()) return;

    // Actualizar puntos y marcar el juego como ganado
    handlePuntos();
    setIsWinGame(true);
    getPalabraRandom();
  };

  // Manejo de los valores de error
  const errorValue = () => {
    setErrorCount((prevErrorCount) => {
      const newErrorCount = prevErrorCount > 0 ? prevErrorCount - 1 : 0;

      // Si se alcanzan 7 errores, terminar el juego
      if (newErrorCount === 0) {
        setIsGameOver(true);
      }
      return newErrorCount;
    });
  };

  // Verificar si la palabra ha sido completamente adivinada
  const valueWord = () => {
    return palabraAdivinar.current.join("") === palabraJuego;
  };

  // Actualizar los puntos al adivinar correctamente
  const handlePuntos = () => {
    countPalabrasJugadas.current += 1;
  };

  // Manejo de la ruta (funcionalidad pendiente de implementación)
  const routePath = () => {
    if (pathname === "/game") {
      // Lógica específica para la ruta /game (no implementada)
    }
  };

  // Reiniciar la palabra de juego
  const resetWord = () => {
    getPalabraRandom();
  };

  // Efecto para reiniciar el juego cuando la palabra de juego cambia
  useEffect(() => {
    if (isGameOver) {
      setErrorCount(7);
      countPalabrasJugadas.current = 0;
      setIsGameOver(false);
      setIsWinGame(false);
    }
  }, [palabraJuego]);

  // Valor del contexto que será proporcionado a los componentes hijos
  const contextValue = {
    handleLetter,
    setErrorCount,
    errorCount,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
    setIsGameOver,
    gameWin: isWinGame,
    resetWord,
    countPalabrasJugadas,
  };

  // Proveer el contexto a los componentes hijos
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
