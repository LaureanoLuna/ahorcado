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
      prompt: `Necesito que me generes una lista de 3 pistas para adivinar la palabra ${palabra}. Las pistas no deben contener la palabra en sí, ya que es para un juego de adivinanzas. Devuélvelas separadas por el símbolo -`,
      maxTokens: 300,
      temperature: 0.9,
      k: 0,
      stopSequences: [],
      returnLikelihoods: "NONE",
    });

    // Procesar la respuesta para extraer solo las pistas
    const text = response.generations[0].text;

    // Dividir el texto en partes donde empieza con '- '
    const pistas = text.split("- ").slice(1);

    // Eliminar saltos de línea y limpiar las pistas
    const pistasLimpias = pistas.map((pista) =>
      pista.replace(/\n/g, "").trim()
    );


    // Verifica si se encontraron pistas y maneja el caso cuando no hay suficientes pistas
    if (!pistasLimpias || pistasLimpias.length < 2) {
      console.error(
        "Error al obtener todas las pistas: No se generaron suficientes pistas"
      );
      throw new Error("No se generaron suficientes pistas");
    }

    return pistasLimpias;
  } catch (error) {
    console.error("Error al obtener pistas:", error);
    throw error; // Re-lanzar el error para manejo posterior
  }
}

export default obtenerPistas;
