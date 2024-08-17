import obtenerPistas from "../ia/performance.js";
import { ramdonPalabra } from "../logic/logicController/fechRamdonPlabra.js";
import PalabraModels from "../Models/PalabraModels.js";

export const getAllPalabras = async (req, res) => {
  try {
    // Obtener todas las palabras del modelo
    const palabras = await PalabraModels.findAll();

    // Verificar si hay palabras disponibles
    if (!palabras || palabras.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron palabras." });
    }

    // Seleccionar una palabra aleatoria
    const palabraAleatoria = ramdonPalabra(palabras);

    // Obtener pistas para la palabra aleatoria
    const pistas = await obtenerPistas(palabraAleatoria);

    // Devolver la respuesta con la palabra y las pistas
    return res.json({ palabra: palabraAleatoria, pistas });
  } catch (error) {
    console.error("Error al obtener palabras:", error); // Log del error en el servidor
    return res.status(500).json({ mensaje: "Error interno del servidor." });
  }
};

export const getPalabra = async (req, res) => {
  try {
    const palabra = await PalabraModels.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(palabra);
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

export const actualizaPalabra = async (req, res) => {
  try {
    await PalabraModels.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ mensaje: "Se actualizo correctamente" });
  } catch (error) {
    res.json({ mensaje: "No se pudo actualizar" });
  }
};

export const crearPalabra = async (req, res) => {
  try {
    await PalabraModels.create(req.body);
    res.json({ mensaje: "Se cargo correctamente" });
  } catch (error) {
    res.json({ mensaje: "No se pudo cargar" });
  }
};

export const eliminarPalabra = async (req, res) => {
  try {
    await PalabraModels.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ mensaje: "Se elimino correctamente" });
  } catch (error) {
    res.json({ mensaje: "No se pudo eliminar " });
  }
};
