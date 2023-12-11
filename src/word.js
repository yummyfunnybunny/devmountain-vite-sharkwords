let word;

function setupWord(element, initWord) {
  word = initWord;
  word.split("").forEach(() => {
    element.insertAdjacentHTML("beforeend", `<div class="letter-box"></div>`);
  });
}

function isLetterInWord(word, letter) {
  console.log(word);
  return word.includes(letter);
}

function revealLetterInWord(word, letter) {
  const letterBoxes = document.querySelectorAll(".letter-box");
  word.split("").forEach((wordLetter, idx) => {
    if (wordLetter === letter) {
      letterBoxes[idx].innerHTML = letter;
    }
  });
}

export { setupWord, isLetterInWord, revealLetterInWord };
