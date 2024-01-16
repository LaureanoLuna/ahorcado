import { useState } from "react";
import "./App.css";
import Letra from "./assets/Components/Letra";
import usePalabraRandom from "./assets/Hooks/usePalabraRamdon";

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
    <div
      style={{
        height: "100vh",
        marginTop: "50%",
      }}
    >
      <div
        style={{
          fontFamily: "ui-monospace",
          fontSize: "xx-large",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        {palabraJuego}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${palabraAdivinar.current.length}, 1fr)`,
          gap: "10px",
          margin: "2em",
        }}
      >
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
            fontFamily: "ui-monospace",
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
