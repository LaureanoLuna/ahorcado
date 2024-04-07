import { useEffect, useRef, useState } from "react";
import Letra from "../assets/Components/Letra";
import { useGameContext } from "../assets/Context/ContextGame";
import GameOver from "../assets/Components/GameOver";
import HorcaGame from "../assets/Components/HorcaGame";

export default function Game() {
  const [inputLetter, setInputLetter] = useState("");
  const inputRef = useRef(null);
  const {
    handleLetter,
    errorCount,
    palabraToGuess,
    resetWord,
    gameOver,
    gameWin,
  } = useGameContext();

  function setLetter(event) {
    const enteredLetter = event.target.value;
    setInputLetter(enteredLetter);
    handleLetter(enteredLetter);
    setTimeout(() => {
      setInputLetter("");
    }, 300);
  }

  function handleChangeWord() {
    resetWord();
  }

  useEffect(() => {
    inputRef.current.focus();
    const interval = setInterval(() => {
      inputRef.current.focus();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {gameOver && <GameOver />}
      {gameWin && "hola"}
      <div className="game-content">
        <div className="content-errors">
          {errorCount}
          <span>fallas</span>
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
            id="input-letter"
            ref={inputRef}
            value={inputLetter}
            type="text"
            onChange={setLetter}
          />
        </div>
        <button onClick={handleChangeWord}>Reset</button>
      </div>
    </>
  );
}
