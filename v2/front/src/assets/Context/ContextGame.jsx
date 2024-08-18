import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import usePalabraRandom from "../Hooks/usePalabraRandom";
import useTimerGame from "../Hooks/useTimerGame.mjs";

// Creación del contexto del juego
const GameContext = createContext();

// Custom hook para utilizar el contexto del juego
export const useGameContext = () => useContext(GameContext);

// Componente proveedor del contexto del juego
export const GameProvider = ({ children }) => {
  const { palabraJuego, palabraAdivinar, getPalabraRandom } = usePalabraRandom();
  const { timer, setTimer } = useTimerGame();

  const countPalabrasJugadas = useRef(0);
  const [errorCount, setErrorCount] = useState(7);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinGame, setIsWinGame] = useState(false);
  const [pistaNumbre, setPistaNumbre] = useState(0);

  const handleLetter = (letter = null) => {
    if (!letter) return;

    const lowercaseLetter = letter.toLowerCase();

    if (!palabraJuego.includes(lowercaseLetter)) {
      setErrorCount((prev) => Math.max(prev - 1, 0));
      return;
    }

    palabraAdivinar.current = palabraAdivinar.current.map((char, index) =>
      palabraJuego[index].toLowerCase() === lowercaseLetter ? palabraJuego[index] : char
    );

    if (palabraAdivinar.current.join("") === palabraJuego) {
      countPalabrasJugadas.current += 1;
      resetTimer();
      setIsWinGame(true);
      getPalabraRandom();
    }
  };

  const resetTimer = () => setTimer(11);

  const resetGame = () => {
    setErrorCount(7);
    countPalabrasJugadas.current = 0;
    resetTimer();
    setIsGameOver(false);
    setIsWinGame(false);
    setPistaNumbre(0);
  };

  useEffect(() => {
    if (isGameOver) resetGame();
  }, [palabraJuego, isGameOver]);

  useEffect(() => {
    if (timer === 0) setIsGameOver(true);
  }, [timer]);

  const contextValue = {
    handleLetter,
    setErrorCount,
    errorCount,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
    setIsGameOver,
    gameWin: isWinGame,
    resetWord: getPalabraRandom,
    countPalabrasJugadas,
    timer,
    resetGame,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};
