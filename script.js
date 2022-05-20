const colors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let index = 0;
let start = false;
let level = 0;

const turnCounter = document.querySelector("#count");
const buttons = document.querySelectorAll(".tile");
const startButton = document.querySelector("#start");
const onButton = document.querySelector("#on");
const topRight = document.querySelector("#red");
const topLeft = document.querySelector("#green");
const bottomRight = document.querySelector("#blue");
const bottomLeft = document.querySelector("#yellow");

onButton.addEventListener("click", (event) => {
  if (onButton.checked === true) {
    turnCounter.innerHTML = "-";
  } else {
    onButton.checked === false;
    turnCounter.innerHTML = "";
    clearGameBoard();
  }
});

startButton.addEventListener("click", (event) => {
  if (onButton.checked === true) {
    if (start === false) {
      start = true;
      sequence();
    }
  }
});

function sequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNumber];
  gamePattern.push(randomColor);
  // setTimeout (() => {
  //   if (gamePattern[index] === "blue") one("blue");
  //   if (gamePattern[index] === "red") one("red");
  //   if (gamePattern[index] === "yellow") one("yellow");
  //   if (gamePattern[index] === "green") one("green");
  // }, 500)
  console.log(gamePattern);
  turnCounter.innerHTML = gamePattern.length;
  gamePattern.forEach((color, index) => {
    let patternColor = document.getElementById(`${color}`);
    let patternColorStyle = patternColor.id;
    // patternColor.style.backgroundColor = 'white';
    setTimeout(() => {
      patternColor.style.backgroundColor = patternColorStyle;
      console.log(`Showing color: ${patternColorStyle}`);
      setTimeout(() => {
        patternColor.style.backgroundColor = null;
      }, 1000);
    }, 1000 * index);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (onButton.checked === true) {
      let userClickedButton = event.target.id;
      // console.log(userClickedButton)
      checkAnswer(userClickedButton);
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.replace("pressed", "tile");
      }, 150);
    }
  });
});

function checkAnswer(color) {
  if (color === gamePattern[index]) {
    console.log("correct");
    index++;
    if (index === gamePattern.length) {
      index = 0;
      sequence();
    }
  } else {
    console.log("incorrect");
    index = 0;
    gamePattern = [];
    start = false;
  }
}

function clearGameBoard() {
  topRight.style.background = "darkred";
  topLeft.style.background = "darkgreen";
  bottomRight.style.background = "darkblue";
  bottomLeft.style.background = "#BDB76B";
  start = false;
  gamePattern = [];
}

// function one (color) {
//   document.querySelector(`#${color}`).style.background = color
  // topRight.style.background = "orange";
  // topLeft.style.background = "orange";
  // bottomRight.style.background = "orange";
  // bottomLeft.style.background = "orange";
//   topRight.classList.add("pressed")
//   setTimeout(() => {
//     topRight.classList.replace("pressed", "tile");
//   }, 200);
//   topLeft.classList.add("pressed")
//   setTimeout(() => {
//     topLeft.classList.replace("pressed", "tile");
//   }, 200);
//   bottomRight.classList.add("pressed")
//   setTimeout(() => {
//     bottomRight.classList.replace("pressed", "tile");
//   }, 200);
//   bottomLeft.classList.add("pressed")
//   setTimeout(() => {
//     bottomLeft.classList.replace("pressed", "tile");
//   }, 200);
// }
