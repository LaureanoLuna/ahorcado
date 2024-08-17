import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImgLogosIndex from "../assets/Components/ImgLogosIndex";

export default function Index() {
  const { mensaje } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleParams = () => {
    navigate("/game");
  };

  const handleMensaje = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    mensaje ? handleMensaje() : setIsVisible(false);
  }, []);

  return (
    <div className="container">
      <ImgLogosIndex />
      <div className="container-index">
        {isVisible ? (
          <>
            <span
              style={{
                fontSize: "2em",
                position: "absolute",
                top: "0",
                color: "red",
                background: "#ffffff3d",
                padding: "10px 15px",
                border: "1px solid tranparent",
                borderRadius: "10px",
                textTransform: "uppercase",
              }}
            >
              {mensaje}
            </span>
          </>
        ) : (
          ""
        )}
        <div
          style={{ cursor: "pointer" }}
          data-link="img-verdugo"
          className="button-link-index"
          to={"game"}
          onClick={handleParams}
        >
          Jugar
        </div>
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
