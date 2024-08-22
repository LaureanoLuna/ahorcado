import { useEffect, useRef, useState } from "react";
import Letra from "../assets/Components/Letra";
import { useGameContext } from "../assets/Context/ContextGame";
import GameOver from "../assets/Components/GameOver";
import HorcaGame from "../assets/Components/HorcaGame";
import { useNavigate } from "react-router-dom";
import BoxCount from "../assets/Components/BoxCount";
import TimerGame from "../assets/Components/TimerGame";

export default function Game() {
  const [inputLetter, setInputLetter] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const {
    handleLetter,
    errorCount,
    palabraToGuess,
    resetWord,
    countPalabrasJugadas,
    resetGame,
    gameOver,
  } = useGameContext();

  const setLetter = (event) => {
    const enteredLetter = event.target.value;
    setInputLetter(enteredLetter);
    handleLetter(enteredLetter);
    setTimeout(() => {
      setInputLetter("");
    }, 300);
  };

  const handleExit = async () => {
    await resetGame();
    navigate("/");
  };

  const handleChangeWord = () => {
    resetWord();
  };

  useEffect(() => {
    inputRef.current.focus();
    const interval = setInterval(() => {
      inputRef.current.focus();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const gameContentStyle = {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    gap: "2em",
  };

  return (
    <>
      {gameOver.current && <GameOver />}
      <div className="game-content">
        <div style={gameContentStyle}>
          <BoxCount num={countPalabrasJugadas.current} text={"Adivinadas"} />
          <TimerGame />
          <BoxCount num={errorCount} text={"Intentos"} />
        </div>
        <div className="representation-game">
          <HorcaGame />
        </div>
        <div id="word-to-guess">
          {palabraToGuess.current.map((letter, index) => (
            <Letra letter={letter} key={index} />
          ))}
        </div>
        <div>
          <input
            autoComplete="off"
            id="input-letter"
            ref={inputRef}
            value={inputLetter}
            type="text"
            onChange={setLetter}
          />
        </div>
        <button onClick={handleChangeWord}>Reset</button>
        <button style={{ background: "red" }} onClick={handleExit}>
          Volver
        </button>
      </div>
    </>
  );
}
