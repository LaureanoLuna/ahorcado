import { useEffect, useRef, useState } from "react";
import Letra from "../assets/Components/Letra";
import useHandleLetra from "../assets/Hooks/useHandleJuego.mjs";
//import "../assets/Function/teclaPress";

export default function Game() {
  const [inputLetra, setInputLetra] = useState("");
  const inputRef = useRef("");
  const { handleLetra, errorCount, palabraAdivinar, resetWord, palabraJuego } =
    useHandleLetra();

  function setLetra(event) {
    let letraIngresada = event.target.value;
    setInputLetra(letraIngresada);
    handleLetra(letraIngresada);
    setTimeout(() => {
      setInputLetra("");
    }, 300);
  }

  function handleChangePalabra() {
    resetWord();
  }

  useEffect(() => {
    inputRef.current.focus();
    const second = setInterval(() => {
      inputRef.current.focus();
    }, 1000);
    return () => {
      clearInterval(second);
    };
  }, []);

  return (
    <div className="game-content">
      <div className="content-errors">{errorCount}</div>
      <div className="representation-game">{palabraJuego}</div>
      <div id="palabra-adivinar">
        {palabraAdivinar.current.map((letra, index) => (
          <Letra letra={letra} key={index} />
        ))}
      </div>
      <div>
        <input
          id="input-letra"
          ref={inputRef}
          value={inputLetra}
          type="text"
          onChange={setLetra}
        />
      </div>
      <button onClick={handleChangePalabra}>Change</button>
    </div>
  );
}
