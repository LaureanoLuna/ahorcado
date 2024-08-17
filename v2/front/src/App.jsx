import "./App.css";
import Index from "./Juego/Index";
import Game from "./Juego/Game";
import { Route, Routes } from "react-router-dom";
import Puntajes from "./Juego/Puntajes";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/:mensaje?" element={<Index />} />
        <Route path="/game" element={<Game />} />
        <Route path="/point/:bool?" element={<Puntajes />} />
        <Route path="/instruccions" />
        <Route path="/about" />
      </Routes>
    </div>
  );
}

export default App;
