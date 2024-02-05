import React, { useEffect, useState } from "react";

export default function ContErrors({ error }) {
  /* const [count, setCount] = useState(0);

  useEffect(() => {
    if (error) {
      setCount(count + 1);
    }
  }, [error]);

  useEffect(() => {
    if (!error) {
      setCount(0); // Reiniciar el contador si error se convierte en false
    }
  }, [error]); */

  return <div>{error}</div>;
}
