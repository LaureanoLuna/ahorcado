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
  const {
    palabraJuego,
    palabraAdivinar,
    getPalabraRandom,
    setPalabrasJugadas,
  } = usePalabraRandom();

  const { pathname } = useLocation();

  const countPalabrasJugadas = useRef(0);
  const [errorCount, setErrorCount] = useState(7);
  const [isGameOver, setIsGameOver] = useState(false);

  const restaErrorCount = () => {
    setErrorCount((prev) => Math.max(prev - 1, 0));
  };

  const handleIsGameOver = () => {
    if (errorCount === 1) setIsGameOver(true);
  };

  const handleLetter = async (letter = null) => {
    if (!letter) return;

    const lowercaseLetter = letter.toLowerCase();

    if (!palabraJuego.includes(lowercaseLetter)) {
      restaErrorCount();
      handleIsGameOver();
      return;
    }

    palabraAdivinar.current = palabraAdivinar.current.map((char, index) =>
      palabraJuego[index].toLowerCase() === lowercaseLetter
        ? palabraJuego[index]
        : char
    );

    if (palabraAdivinar.current.join("") === palabraJuego) {
      countPalabrasJugadas.current += 1;
      getPalabraRandom();
      setErrorCount(7);
    }
  };

  /* Funcion el la cual resetearmos todo el juego, ya sea porque perdio o dejo de jugar */
  const resetGame = async () => {
    await Promise.all([setErrorCount(7), setPalabrasJugadas([])]);
    setIsGameOver(false);
    countPalabrasJugadas.current = 0;
  };

  useEffect(() => {
    if (pathname === "/game") {
      setIsGameOver(false);
      countPalabrasJugadas.current = 0;
      setErrorCount(7);
    }
  }, [pathname]);

  const contextValue = {
    handleLetter,
    setErrorCount,
    errorCount,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
    setIsGameOver,
    resetWord: getPalabraRandom,
    countPalabrasJugadas,
    resetGame,
    palabraJuego,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
