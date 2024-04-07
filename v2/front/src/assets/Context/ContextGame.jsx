import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import usePalabraRandom from "../Hooks/usePalabraRandom";
import { useLocation } from "react-router-dom";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const { palabraJuego, palabraAdivinar, getPalabraRandom } =
    usePalabraRandom();
  const puntos = useRef(palabraJuego.length * 10);
  const { pathname } = useLocation();
  const [errorCount, setErrorCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinGame, setIsWinGame] = useState(false);

  const handleLetter = (letter = null) => {
    if (letter === null) return;

    const lowercaseLetter = letter.toLowerCase();

    if (palabraJuego.includes(lowercaseLetter)) {
      Array.from(palabraJuego).forEach((char, index) => {
        if (char.toLowerCase() === lowercaseLetter) {
          palabraAdivinar.current[index] = char;
        }
      });

      if (!valueWord()) return;

      handlePuntos();
      setIsWinGame(true);
    } else {
      errorValue();
    }
  };

  const errorValue = () => {
    if (errorCount === 7) {
      puntos.current = 0;
      setIsGameOver(true);
      return;
    }
    setErrorCount((prevErrorCount) => prevErrorCount + 1);
  };

  const valueWord = () => {
    return palabraAdivinar.current.join("") === palabraJuego;
  };

  const handlePuntos = () => {
    puntos.current -= errorCount;
  };

  const routePath = () => {
    if (pathname === "/game") {
    }
  };

  const resetWord = () => {
    getPalabraRandom();
  };

  useEffect(() => {
    if (isGameOver) {
      setErrorCount(0);
      puntos.current = palabraJuego.length * 10;
      setIsGameOver(false);
      setIsWinGame(false);
    }
  }, [palabraJuego]);

  const contextValue = {
    handleLetter,
    setErrorCount,
    errorCount,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
    gameWin: isWinGame,
    resetWord,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
