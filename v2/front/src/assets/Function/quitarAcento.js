/* Funcion que por parametro toma la palabra en juego y le quita algun acento, para facilitar al jugado 
@param string
@return string
*/
export function quitarAcento(word) {
  const acentos = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };

  return word
    .split("")
    .map((l) => acentos[l] || l)
    .join("");
}
