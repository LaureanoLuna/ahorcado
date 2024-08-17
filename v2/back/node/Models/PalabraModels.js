import db from "../Database/db.js";
import { DataTypes } from "sequelize";

const PalabraModels = db.define("palabras", {
  palabra: { type: DataTypes.STRING(50) },
});

PalabraModels.sync();

export default PalabraModels;
