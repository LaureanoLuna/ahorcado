import { useState } from "react";
import "./App.css";
import Letra from "./assets/Components/Letra";
import useHandleLetra from "./assets/Hooks/useHandleJuego.mjs";

function App() {
  const [inputLetra, setInputLetra] = useState("");
  const { handleLetra, errorCount, palabraAdivinar, resetWord, palabraJuego } =
    useHandleLetra(inputLetra);

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
          style={{
            width: "100px",
            height: "50px",
            marginBottom: "20px",
            textAlign: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "xx-large",
            color: "black",
            textTransform: "uppercase",
          }}
          value={inputLetra}
          type="text"
          onChange={setLetra}
        />
      </div>

      <button onClick={handleChangePalabra}>Change</button>
    </div>
  );
}

export default App;
