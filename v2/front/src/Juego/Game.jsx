import { useEffect, useRef, useState } from "react";
import Letra from "../assets/Components/Letra";
import { useGameContext } from "../assets/Context/ContextGame";
import GameOver from "../assets/Components/GameOver";

export default function Game() {
  const [inputLetter, setInputLetter] = useState("");
  const inputRef = useRef(null);
  const { handleLetter, errorCount, palabraToGuess, resetWord } =
    useGameContext();

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

  console.log(palabraToGuess);

  return (
    <>
      <GameOver />
      <div className="game-content">
        <div className="content-errors">{errorCount.current}</div>
        <div className="representation-game"></div>
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
