import "./style.css";
import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import { setupWord, isLetterInWord, revealLetterInWord } from "./src/word.js";

const word = getRandomWord();
// console.log(word);

document.querySelector("#app").innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

setupWord(document.querySelector("#word-container"), word);

const initSharkwords = () => {
  let numWrong = 0;
  // const word = "word";

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  setSharkImage(document.querySelector("#shark-img"), numWrong);

  console.log(isLetterInWord(word, word[0]), "(should be true)");
  console.log(isLetterInWord(word, "1"), "(should be false)");

  revealLetterInWord(word, word[0]);
};

initSharkwords();
