//importamos la conexion a la BD

import db from "../Database/db.js";
//importamos Sequelize
import { DataTypes } from "sequelize";

const PuntajeModels = db.define("puntaje", {
  nombre: { type: DataTypes.STRING },
  puntos: { type: DataTypes.INTEGER },
});

PuntajeModels.sync();

export default PuntajeModels;
