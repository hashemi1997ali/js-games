const vowels = ["a", "e", "i", "o", "u"];
const playerSentence = process.argv[2].toLowerCase();

if (!playerSentence) {
  console.log("Please provide a sentence to translate.");
} else {
  console.log(translateToPigLatin(playerSentence));
}

function translateToPigLatin(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (vowels.includes(word[0])) {
        return word + "way";
      } else {
        const firstVowelIndex = word
          .split("")
          .findIndex((char) => vowels.includes(char));

        if (firstVowelIndex !== -1) {
          const consonantCluster = word.slice(0, firstVowelIndex);
          const restOfWord = word.slice(firstVowelIndex);
          return restOfWord + consonantCluster + "ay";
        } else {
          return word + "ay";
        }
      }
    })
    .join(" ");
}
