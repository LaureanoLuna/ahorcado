import express from "express";
import cors from "cors";
import db from "./Database/db.js";
import PuntajeRouters from "./Routes/Routes.js";

const app = express();

app.options("*", cors()); // Permite solicitudes OPTIONS para todas las rutas

app.use(
  cors({
    origin: "http://localhost:5173", // Asegúrate de que esta URL sea la correcta
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(PuntajeRouters);

try {
  await db.authenticate();
  console.log(`conexion exitosa a la db`);
} catch (error) {
  console.log(`conexion error a la db ${error}`);
}

/* app.get("/a", (req, res) => {
  res.render("HOLA MUNDO");
}); */

app.listen(8001, () => {
  console.log(`Server andando en http://localhost:8001`);
});
