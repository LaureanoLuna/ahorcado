import { GoogleGenerativeAI } from "@google/generative-ai";

function useOpenIA() {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDpxLfvLDas0ivcA2-2tPoPuHBGSFd_qB8"
  );

  const obtenerPistas = async (palabra) => {
    try {
      const modelo = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          temperature: 1.5,
        },
      });

      const prompt = `Pista de esta palabra: ${palabra}, solo la pista`;
      const resultado = await modelo.generateContent(prompt);

      if (!resultado || !resultado.response) {
        throw new Error("No se recibió una respuesta válida de la API.");
      }

      const respuesta = resultado.response;
      const texto = respuesta.text();

      if (!texto) {
        throw new Error("La respuesta no contiene texto.");
      }

      return texto;
    } catch (error) {
      console.error("Error en la API de IA:", error);
      setError(error.message); // Guardar el mensaje de error en el estado
    }
  };

  return { obtenerPistas }; // Devolver el estado de error
}

export default useOpenIA;
