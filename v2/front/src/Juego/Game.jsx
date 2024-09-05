import { useEffect, useRef, useState } from "react";
import Letra from "../assets/Components/Letra";
import { useGameContext } from "../assets/Context/ContextGame";
import GameOver from "../assets/Components/GameOver";
import HorcaGame from "../assets/Components/HorcaGame";
import { useNavigate } from "react-router-dom";
import BoxCount from "../assets/Components/BoxCount";
import TimerGame from "../assets/Components/TimerGame";
import TextPista from "../assets/Components/TextPista";

export default function Game() {
  // Estado para la letra ingresada por el jugador
  const [inputLetter, setInputLetter] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Extracción de métodos y estados del contexto del juego
  const {
    handleLetter,
    errorCount,
    palabraToGuess,
    resetWord,
    countPalabrasJugadas,
    resetGame,
    gameOver,
    palabraJuego,
  } = useGameContext();

  // Maneja el input donde el jugador ingresa las letras
  const setLetter = (event) => {
    const enteredLetter = event.target.value;
    setInputLetter(enteredLetter);
    handleLetter(enteredLetter);

    // Limpia el input después de 300 ms
    setTimeout(() => {
      setInputLetter("");
    }, 300);
  };

  // Maneja la salida voluntaria del juego y reinicia el estado del juego
  const handleExit = async () => {
    await resetGame();
    navigate("/");
  };

  // Método para cambiar la palabra a adivinar (principalmente para desarrollo)
  const handleChangeWord = () => {
    resetWord();
  };

  // Efecto para enfocar el input al cargar el componente y cada segundo
  useEffect(() => {
    inputRef.current.focus();

    const interval = setInterval(() => {
      inputRef.current.focus();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para reiniciar el juego al cargar el componente
  useEffect(() => {
  }, [palabraJuego]);

  // Estilos del contenedor principal del juego
  const gameContentStyle = {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    gap: "2em",
  };

  return (
    <>
      {gameOver && <GameOver />}{" "}
      {/* Muestra la pantalla de Game Over si el juego ha terminado */}
      <div className="game-content">
        <div style={gameContentStyle}>
          <BoxCount num={countPalabrasJugadas.current} text={"Adivinadas"} />
          <TimerGame />
          <BoxCount num={errorCount} text={"Intentos"} />
        </div>
        <div className="representation-game">
          <HorcaGame />
        </div>
        <TextPista />
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
