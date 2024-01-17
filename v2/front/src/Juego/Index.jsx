import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div
      style={{
        width: "auto",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "300px",
      }}
    >
      <Link
        style={{
          minWidth: "30%",
          border: "solid",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "black",
          boxShadow: "5px 5px 1px black",
        }}
        to={"game"}
      >
        Jugar
      </Link>
      <Link
        style={{
          minWidth: "30%",
          border: "solid",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "black",
          boxShadow: "5px 5px 1px black",
        }}
        to={"point"}
      >
        Puntos
      </Link>
      <Link
        style={{
          minWidth: "30%",
          border: "solid",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "black",
          boxShadow: "5px 5px 1px black",
        }}
        to={"instruccions"}
      >
        Instrucciones
      </Link>
      <Link
        style={{
          minWidth: "30%",
          border: "solid",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "black",
          boxShadow: "5px 5px 1px black",
        }}
        to={"about"}
      >
        ¿Quienes Somos?
      </Link>
    </div>
  );
}
