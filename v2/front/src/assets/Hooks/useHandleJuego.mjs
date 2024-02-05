import { useEffect, useState } from "react";
import usePalabraRandom from "./usePalabraRandom";
import { quitarAcento } from "../Function/quitarAcento";

function useHandleLetra() {
  const { palabraJuego, palabraAdivinar, getPalabraRandom } =
    usePalabraRandom();
  const [errorCount, setErrorCount] = useState(0);

  const handleLetra = (e = null) => {
    if (e === null) return;
    const letraIngresada = e.toLowerCase();
    if (palabraJuego.includes(letraIngresada)) {
      Array.from(palabraJuego).map((letra, i) => {
        if (letra.toLowerCase() === letraIngresada) {
          palabraAdivinar.current[i] = letra;
        }
      });
    } else {
      setErrorCount((prevErrorCount) => prevErrorCount + 1);
    }
  };

  const resetWord = () => {
    getPalabraRandom();
  };

  useEffect(() => {
    handleLetra();
    setErrorCount(0);
  }, [palabraJuego]);

  return { handleLetra, errorCount, palabraAdivinar, resetWord, palabraJuego };
}

export default useHandleLetra;
