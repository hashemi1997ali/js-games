const playerSentence = process.argv[2];
const shift = parseInt(process.argv[3]);

function caesarCipher(sentence, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26;

  return sentence
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        const charCode = char.charCodeAt(0) - 97;
        const shiftedCode = (charCode + normalizedShift) % 26;
        return String.fromCharCode(shiftedCode + 97);
      }
      if (char >= "A" && char <= "Z") {
        const charCode = char.charCodeAt(0) - 65;
        const shiftedCode = (charCode + normalizedShift) % 26;
        return String.fromCharCode(shiftedCode + 65);
      }
      return char;
    })
    .join("");
}

console.log(caesarCipher(playerSentence, shift));
