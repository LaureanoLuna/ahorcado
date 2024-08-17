//Importamos Modelo

import PuntajeModels from "../Models/PuntajeModels.js";

/* Metodos para Acceso al CRUD */

/* Mostrar todos los registros */

export const getAllPuntajes = async (req, res) => {
  try {
    const puntajes = await PuntajeModels.findAll({
      order: [["puntos",'DESC']],
    });
    res.json(puntajes);
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

/* Mostrar un  registro */

export const getPuntaje = async (req, res) => {
  try {
    const puntaje = await PuntajeModels.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(puntaje);
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

/* Crear un registro */

export const cargarPuntaje = async (req, res) => {
  try {
    await PuntajeModels.create(req.body);
    res.json({ message: "Se cargo correctamente" });
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

/* Actualizamos un registro */

export const actualizaPuntaje = async (req, res) => {
  try {
    await PuntajeModels.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Se actualizo correctamente" });
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

export const eliminarPuntaje = async (req, res) => {
  try {
    await PuntajeModels.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Se elimino correctamente" });
  } catch (error) {
    res.json({ mensaje: error.message });
  }
};
