import { useState } from "react";
import "./App.css";
import Letra from "./assets/Components/Letra";
import usePalabraRandom from "./assets/Hooks/usePalabraRandom";

function App() {
  const { palabraJuego, getPalabraRandom, palabraAdivinar } =
    usePalabraRandom();
  const [inputLetra, setInputLetra] = useState("");

  function handleLetra(e) {
    setInputLetra(e.target.value);
    Array.from(palabraJuego).map((letra, i) => {
      if (letra.toLowerCase() === e.target.value.toLowerCase()) {
        palabraAdivinar.current[i] = letra;
      }
    });
    setTimeout(() => {
      setInputLetra("");
    }, 1000);
  }

  return (
    <div className="game-content">
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
          onChange={handleLetra}
        />
      </div>
      <button onClick={getPalabraRandom}>Change</button>
    </div>
  );
}

export default App;
