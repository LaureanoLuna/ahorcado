import React from "react";
import ModalCargaPuntos from "../Components/ModalCargaPuntos";
import axios from "./axios";

/**
 * Obtiene el puntaje mínimo del juego para los puntos jugados.
 *
 * @param {number} puntosJugados - Puntos obtenidos por el jugador.
 * @throws Will throw an error if the request fails.
 */
export async function getMinPointGame(puntosJugados) {
  try {
    const resp = await axios.get(`puntajeMin/${puntosJugados}`);

    if (resp.status !== 200 && resp.status !== 205) {
      throw new Error(`Error en la Carga de los Puntos: ${resp.statusText}`);
    }

    const data = await resp.data.response;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error en la Carga de los Puntos:", error.message);
    throw error; // Re-lanza el error para que el llamador lo maneje si es necesario
  }
}

/**
 * Valida los puntos obtenidos por el jugador.
 *
 * @param {boolean} respuesta - Respuesta de la validación de puntos.
 * @returns {JSX.Element|null} - ModalCargaPuntos si la validación es verdadera, de lo contrario null.
 */
const validatePoints = (respuesta) => {
  if (respuesta) {
    return <ModalCargaPuntos isOpen={true} />;
  }
  return null;
};
