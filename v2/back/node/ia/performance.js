import { CohereClient } from "cohere-ai";

// Configura el cliente de Cohere con la API key
const cohere = new CohereClient({
  token: "RGpejWeGdAsPalWZYyD3ojPVNaYTmKDbYO32PtVg", // Clave API de prueba
});

// Función para obtener pistas para adivinar una palabra
async function obtenerPistas(palabra) {
  try {
    const response = await cohere.generate({
      model: "c4ai-aya-23-35b",
      prompt: `Necesito que me generes 3 pistas para adivinar la palabra ${palabra}. Las pistas no deben contener la palabra en sí, ya que es para un juego de adivinanzas. Devuélvelas separadas por el símbolo -`,
      maxTokens: 300,
      temperature: 0.9,
      k: 0,
      stopSequences: [],
      returnLikelihoods: "NONE",
    });

    // Procesar la respuesta para extraer solo las pistas
    const text = response.generations[0].text;

    // Regex para extraer las pistas numeradas (asumiendo que siempre están numeradas)
    const pistas = text.match(/^\d+\.\s*(.*)$/gm);
    console.log(pistas);

    // Verifica si se encontraron pistas y maneja el caso cuando no hay suficientes pistas
    if (!pistas || pistas.length < 3) {
      obtenerPistas(palabra)
    }

    return {
      pistaUno: pistas[0].replace(/^\d+\.\s*/, "").trim(),
      pistaDos: pistas[1].replace(/^\d+\.\s*/, "").trim(),
      pistaTres: pistas[2].replace(/^\d+\.\s*/, "").trim(),
    };
  } catch (error) {
    console.error("Error al obtener pistas:", error);
    throw error; // Re-lanzar el error para manejo posterior
  }
}

export default obtenerPistas;

// Ejemplo de uso de la función
/* (async () => {
  try {
    const pistas = await obtenerPistas("naranja");
    console.log(pistas);
  } catch (error) {
    console.error("Error al obtener pistas:", error);
  }
})(); */
