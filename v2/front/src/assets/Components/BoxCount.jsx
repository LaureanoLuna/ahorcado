import React from "react";

export default function BoxCount({ num, text }) {
  return (
    <div className="content">
      {num}
      <span>{text}</span>
    </div>
  );
}
