import "./App.css";
import Game from "./Juego/Game";
import { Route, Routes } from "react-router-dom";
import Index from "./Juego/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/game" element={<Game />} />
        <Route path="/point" element={"hola"} />
        <Route path="/instruccions" />
        <Route path="/about" />
      </Routes>
    </div>
  );
}

export default App;
