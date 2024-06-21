import axios from "./axios";

/* Funcion con la cual obtenemos una palabra random para el juego */
export async function fetchPalabraRandom() {
  /* variable contenedora de la url de la api */
  //const url = "https://clientes.api.greenborn.com.ar/public-random-word";

  try {
    /* REALIZAMOS EL FETCH HACIA LA URL */
    const resp = await axios.get('/palabras')
    /* VERIFICAMOS EL ESTADO DE LA CONSULTA */
    if (!resp.statusText === 'OK') {
      /* DE SER NEGATIVA MANEJAMOS EL ERROR */
      throw new Error(`Error fetching random word: ${resp.statusText}`);
    }
    /* CAPTAMOS EL VALOR DE LA RESPUESTA Y LO CONVERTIMOS EN UN JSON */
    const data = await resp.data;
    /* VALIDAMOS QUE LA VARIBLE EXISTA, SEA UN ARREGLO Y CONTENGA UN VALOR */
    if (!data || data.length === 0) {
      throw new Error("Invalid data received from the server");
    }

    return data.palabra.toLowerCase();
  } catch (error) {
    console.error("Error in fetchPalabraRandom:", error.message);
    throw error; // Re-throw the error for the caller to handle if needed
  }
}
