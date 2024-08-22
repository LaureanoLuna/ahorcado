

function handleLetra(e, palabraJuego) {    
  Array.from(palabraJuego).map((letra, i) => {
    if (letra.toLowerCase() === e.target.value.toLowerCase()) {
      palabraAdivinar.current[i] = letra;
    }
  });
}
