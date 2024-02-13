import React, { useEffect } from "react";
import imgVerdugo from "../Img/verdugo.png";
import imgCaliz from "../Img/caliz.png";
import imgPtos from "../Img/pergamino.png";
import imgAbout from "../Img/quien.png";

export default function ImgLogosIndex() {
  const handleMouseEnter = (e) => {
    
    let link = e.target;
    let imgVisible = document.querySelectorAll(".img-visible");

    imgVisible.forEach((e) => {
      e.classList.remove("img-visible");
    });

    document
      .querySelector(`.${link.getAttribute("data-link")}`)
      .classList.add("img-visible");
  };

  const mouseLeave = () => {
    document.querySelectorAll(".img-visible")?.forEach((e) => {
      e.classList.remove("img-visible");
    });
  };

  useEffect(() => {
    const buttonLink = document.querySelectorAll(".button-link-index");

    buttonLink?.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    // Devolver una función de limpieza para eliminar el event listener
    return () => {
      buttonLink?.forEach((element) => {
        element.removeEventListener("click", handleMouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <div className="container-img-select-game">
      <img
        className="img-verdugo"
        src={imgVerdugo}
        alt="logo del verdugo indicador de jugar"
      />
      <img
        className="img-caliz"
        src={imgCaliz}
        alt="logo del caliz indicador de puntos"
      />
      <img
        className="img-pergamino "
        src={imgPtos}
        alt="logo de pergamino indicador de instrucciones"
      />
      <img
        className="img-about"
        src={imgAbout}
        alt="logo de pergamino indicador de instrucciones"
      />
    </div>
  );
}
