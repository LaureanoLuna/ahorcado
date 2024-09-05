import express from "express";
import {
  actualizaPuntaje,
  cargarPuntaje,
  eliminarPuntaje,
  getAllPuntajes,
  getMinPoint,
  getPuntaje,
} from "../Controller/ControllerPuntajes.js";
import {
  actualizaPalabra,
  crearPalabra,
  eliminarPalabra,
  getAllPalabras,
  getPalabra,
} from "../Controller/ControllerPalabras.js";

const router = express.Router();

/* Rutas de Puntaje */
//Lectura
router.get("/puntajes/", getAllPuntajes);
router.get("/puntajes/:id", getPuntaje);
router.get("/puntajes/puntajeMin/:point", getMinPoint);
//Create
router.post("/puntajes", cargarPuntaje);
//Update
router.put("/puntajes/:id", actualizaPuntaje);
//Delete
router.delete("/puntajes/:id", eliminarPuntaje);

/* --------------------------------------------------------------------- */

/* Rutas de Palabra */
//Lectura
router.get("/palabras", getAllPalabras);
router.get("/palabras/:id", getPalabra);
//Create
router.post("/palabras", crearPalabra);
//Update
router.put("/palabras/:id", actualizaPalabra);
//Delete
router.delete("/palabras/:id", eliminarPalabra);

export default router;
