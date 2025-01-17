import axios from "./axios";
import { quitarAcento } from "./quitarAcento";

/* Funcion con la cual obtenemos una palabra random para el juego */
export async function fetchPalabraRandom() {
  /* variable contenedora de la url de la api */
  const url = "https://random-word-api.herokuapp.com/word?number=1&lang=es";

  try {
    /* REALIZAMOS EL FETCH HACIA LA URL */
    const resp = await axios.get(url);

    /* VERIFICAMOS EL ESTADO DE LA CONSULTA */
    if (!resp.status === 200) {
      /* DE SER NEGATIVA MANEJAMOS EL ERROR */
      throw new Error(`Error fetching random word: ${resp.statusText}`);
    }
    /* CAPTAMOS EL VALOR DE LA RESPUESTA Y LO CONVERTIMOS EN UN JSON */
    const data = await resp.data[0];

    /* VALIDAMOS QUE LA VARIBLE EXISTA, SEA UN ARREGLO Y CONTENGA UN VALOR */
    if (!data || data.length === 0) {
      throw new Error("Invalid data received from the server");
    }

    return await quitarAcento(data);
    
  } catch (error) {
    console.error("Error in fetchPalabraRandom:", error.message);
    throw error; // Re-throw the error for the caller to handle if needed
  }
}
