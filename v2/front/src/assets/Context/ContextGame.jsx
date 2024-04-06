import { createContext, useContext, useEffect, useRef, useState } from "react";
import usePalabraRandom from "../Hooks/usePalabraRandom";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const { palabraJuego, palabraAdivinar, getPalabraRandom } =
    usePalabraRandom();
  const errorCountRef = useRef(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleLetter = (letter = null) => {
    if (letter === null) return;
    const lowercaseLetter = letter.toLowerCase();
    if (palabraJuego.includes(lowercaseLetter)) {
      Array.from(palabraJuego).forEach((char, index) => {
        if (char.toLowerCase() === lowercaseLetter) {
          palabraAdivinar.current[index] = char;
        }
      });
    } else {
      errorCountRef.current += 1;
    }
  };

  const errorValue = () => {
    if (errorCountRef.current === 7) {
      setIsGameOver(true);
      return;
    }
    errorCountRef.current += 1;
  };

  const resetWord = () => {
    getPalabraRandom();
  };

  useEffect(() => {
    handleLetter();
    errorCountRef.current = 0;
  }, [palabraJuego]);

  const contextValue = {
    handleLetter,
    errorCount: errorCountRef,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
