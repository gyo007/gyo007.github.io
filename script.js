const wordsArray = ["분석하는 디자이너 황다교입니다.", "설계하는 디자이너 황다교입니다.", "창의적인 생각을 좋아하는 디자이너 황다교입니다.", "발전하는 디자이너 황다교입니다."];
let dynamicElement = document.querySelector(".text--dynamic");
let currentWord = "",
  currentLetter = "",
  currentWordCount = 0,
  currentLetterCount = 0;
let lengthArray = wordsArray.length;

function typeWords() {
  if (currentWordCount == lengthArray) {
    currentWordCount = 0;
  }

  currentWord = wordsArray[currentWordCount];
  currentLetter = currentWord.slice(0, currentLetterCount);
  currentLetterCount = currentLetterCount + 1;
  dynamicElement.textContent = currentLetter;

  if (currentLetterCount == currentWord.length + 1) {
    currentWordCount++;
    currentLetterCount = 0;
  }
  setTimeout(typeWords, 150);
}

window.addEventListener("load", typeWords);