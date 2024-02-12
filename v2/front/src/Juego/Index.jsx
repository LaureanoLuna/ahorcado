import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    const handleClick = (e) => {
      let link = e.target;
      if (link.getAttribute("data-link") === "game") {
        console.log(link);
      }
    };

    document.querySelectorAll(".button-link-index")?.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    // Devolver una función de limpieza para eliminar el event listener
    return () => {
      document.querySelectorAll(".button-link-index")?.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <div className="container">
      <div className="container-index">
        <Link data-link="game" className="button-link-index" to={"game"}>
          Jugar
        </Link>
        <Link data-link="point" className="button-link-index" to={"point"}>
          Puntos
        </Link>
        <Link
          data-link="instruccions"
          className="button-link-index"
          to={"instruccions"}
        >
          Instrucciones
        </Link>
        <Link data-link="about" className="button-link-index" to={"about"}>
          ¿Quienes Somos?
        </Link>
      </div>
    </div>
  );
}
