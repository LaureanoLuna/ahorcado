import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBUbNzL1QKwMy8h6P7NiOCAHRuU4RXv2j0");

const openai = new OpenAI({
  apiKey: "19c28c4122a143cfab03bdd87c8cedfb",
  baseURL: "https://api.aimlapi.com/",
});

async function ejeG(params) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 10,
        temperature: 1.5,
      },
    });
    const promp = `pista de esta palabra: ${params}, solo la pista`;
    const result = await model.generateContent(promp);
    const respon = await result.response;
    const text = respon.text();
    console.log(text);
  } catch (error) {
    console.error(error);
  }
}

async function eje(palabra) {
  try {
    const pistas = await openai.chat.completions.create({
      model: "gemini-1.5-flash",
      messages: [
        {
          role: "system",
          content:
            "Tu eres un asistente para generar pistas de adivinanzas sobre una palabra, pero sin usar esa palabra dentro de dichas pistas",
        },
        {
          role: "user",
          content: `una pista de esta palabra: ${palabra}`,
        },
      ],
      max_tokens: 10,
      repetition_penalty: 1.2,
      temperature: 0.5,
    });

    console.log(pistas.choices[0].message.content);
  } catch (error) {
    console.error("Error al obtener pistas:", error);
  }
}

ejeG("vaca");
