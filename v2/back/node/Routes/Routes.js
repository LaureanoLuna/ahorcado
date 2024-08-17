import express from "express";
import {
  actualizaPuntaje,
  cargarPuntaje,
  eliminarPuntaje,
  getAllPuntajes,
  getPuntaje,
} from "../Controller/ControllerPuntajes.js";

const router = express.Router();

router.get("/", getAllPuntajes);
router.post("/", cargarPuntaje);
router.get("/:id", getPuntaje);
router.put("/:id", actualizaPuntaje);
router.delete("/:id", eliminarPuntaje);

export default router;
