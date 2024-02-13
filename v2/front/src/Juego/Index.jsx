import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ImgLogosIndex from "../assets/Components/ImgLogosIndex";

export default function Index() {
 
  return (
    <div className="container">
      <ImgLogosIndex />
      <div className="container-index">
        <Link data-link="img-verdugo" className="button-link-index" to={"game"}>
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
