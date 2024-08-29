export function quitarAcento(letter) {
  const exp_letterConAcento = /[áéíóú]/g;
  const letterSinAcento = ["a", "e", "i", "o", "u"];

  if (exp_letterConAcento.test(letter)) {
    return letterSinAcento[exp_letterConAcento.lastIndex - 1];
  }

  return letter;
}
