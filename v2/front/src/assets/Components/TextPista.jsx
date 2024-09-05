import React, { useEffect, useState } from "react";
import useOpenIA from "../Hooks/useOpenIA.mjs";
import { useGameContext } from "../Context/ContextGame";

export default function TextPista() {
  const { obtenerPistas } = useOpenIA(); // Hook para obtener pistas de la IA
  const [pista, setPista] = useState(""); // Estado local para almacenar la pista
  const { errorCount, palabraJuego } = useGameContext(); // Estado del juego

  // Función para solicitar una pista
  const solicitarPista = async () => {
    if (errorCount % 3 === 0) {
      const nuevaPista = await obtenerPistas(palabraJuego);
      setPista(nuevaPista); // Establece la nueva pista si hay un múltiplo de 3 errores
    }
  };

  useEffect(() => {
    solicitarPista(); // Llama a solicitarPista cada vez que cambia errorCount
  }, [errorCount]);

  useEffect(() => {
    setPista("");
  }, [palabraJuego]);

  return <div>{pista}</div>; // Renderiza la pista actual
}
