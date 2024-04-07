import React from "react";
import { useGameContext } from "../Context/ContextGame";
import imgV from "../Img/HorcaViva.svg";
import imgM from "../Img/HorcaMuerta.svg";

export default function HorcaGame() {
  const { errorCount } = useGameContext();

  const estilosImg = {};

  const handleImg = () => {};

  return (
    <div>
      {errorCount === 7 ? (
        <img style={{ maxWidth: "300px" }} src={imgM} />
      ) : (
        <img style={{ maxWidth: "300px" }} src={imgV} />
      )}
    </div>
  );
}
