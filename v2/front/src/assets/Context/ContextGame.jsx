import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import usePalabraRandom from "../Hooks/usePalabraRandom";

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

  const countPalabrasJugadas = useRef(0);
  const [errorCount, setErrorCount] = useState(7);
  /* const [isGameOver, setIsGameOver] = useState(false); */
  const isGameOver = useRef(false);
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
      palabraJuego[index].toLowerCase() === lowercaseLetter
        ? palabraJuego[index]
        : char
    );

    if (palabraAdivinar.current.join("") === palabraJuego) {
      countPalabrasJugadas.current += 1;
      setIsWinGame(true);
      getPalabraRandom();
    }
  };

  /* Funcion el la cual resetearmos todo el juego, ya sea porque perdio o dejo de jugar */
  const resetGame = async () => {
    await Promise.all([
      setErrorCount(7),
      setIsWinGame(false),
      setPistaNumbre(0),
      setPalabrasJugadas([]),
    ]);
    isGameOver.current = false;
    countPalabrasJugadas.current = 0;
  };

  useEffect(() => {
    if (isGameOver.current) resetGame();
  }, [palabraJuego, isGameOver.current]);

  const contextValue = {
    handleLetter,
    setErrorCount,
    errorCount,
    palabraToGuess: palabraAdivinar,
    gameOver: isGameOver,
    gameWin: isWinGame,
    resetWord: getPalabraRandom,
    countPalabrasJugadas,
    resetGame,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
