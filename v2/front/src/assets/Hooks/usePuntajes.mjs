import { useState } from "react";
import axios from "../Function/axios";

function usePuntajes() {
  const [puntajes, setPuntajes] = useState([]); // Estado para almacenar los puntajes
  const [error, setError] = useState(null); // Estado para manejar posibles errores

  // Función para obtener los puntajes desde el servidor
  const fetchPuntajes = async () => {
    try {
      const response = await axios.get("/puntajes");
      setPuntajes(response.data); // Almacena los puntajes obtenidos
    } catch (err) {
      setError(err.message); // Manejo de errores
    }
  };

  return { fetchPuntajes, puntajes, error }; // Devuelve la función de fetch y los estados
}

export default usePuntajes;
