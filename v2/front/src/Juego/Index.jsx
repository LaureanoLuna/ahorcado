import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImgLogosIndex from "../assets/Components/ImgLogosIndex";

export default function Index() {
  const { mensaje } = useParams(); // Obtener el mensaje de los parámetros de la URL
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del mensaje
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  // Función para manejar la navegación a la ruta "game"
  const handleParams = () => {
    navigate("/game");
  };

  // Efecto para manejar la visibilidad del mensaje
  useEffect(() => {
    let timeoutId; // Variable para almacenar el ID del temporizador

    if (mensaje) {
      setIsVisible(true); // Mostrar el mensaje
      timeoutId = setTimeout(() => {
        setIsVisible(false); // Ocultar el mensaje después de 2 segundos
        navigate("/", { replace: true });
      }, 2000);
    } else {
      setIsVisible(false); // Asegurarse de que el mensaje esté oculto si no hay mensaje
    }

    return () => {
      clearTimeout(timeoutId); // Limpiar el temporizador cuando el componente se desmonte o el mensaje cambie
    };
  }, [mensaje]); // Dependencia del efecto en 'mensaje'

  return (
    <div className="container">
      <ImgLogosIndex />
      <div className="container-index">
        {isVisible && ( // Mostrar el mensaje solo si isVisible es true
          <span
            style={{
              fontSize: "2em",
              position: "absolute",
              top: "0",
              color: "red",
              background: "#ffffff3d",
              padding: "10px 15px",
              border: "1px solid transparent",
              borderRadius: "10px",
              textTransform: "uppercase",
            }}
          >
            {mensaje} {/* Mostrar el mensaje */}
          </span>
        )}

        {/* <div
          style={{ cursor: "pointer" }}
          data-link="img-verdugo"
          className="button-link-index"
          to={"game"}
          onClick={handleParams}
        >
          Jugar
        </div> */}
        <Link data-link="img-caliz" className="button-link-index" to={"game"}>
          Jugar
        </Link>

        <Link data-link="img-caliz" className="button-link-index" to={"point"}>
          Puntos
        </Link>

        <Link
          data-link="img-pergamino"
          className="button-link-index"
          to={"instruccions"}
        >
          Instrucciones
        </Link>

        <Link data-link="img-about" className="button-link-index" to={"about"}>
          ¿Quienes Somos?
        </Link>
      </div>
    </div>
  );
}
