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
    // topRight.style.background = "red";
    // setTimeout(() => {
    //   topLeft.style.background = "green";
    // }, 900);
    // setTimeout(() => {
    //   bottomRight.style.background = "blue";
    // }, 300);
    // setTimeout(() => {
    //   bottomLeft.style.background = "yellow";
    // }, 600);
    // setTimeout(() => {
    //   topRight.style.background = "darkred";
    //   topLeft.style.background = "darkgreen";
    //   bottomRight.style.background = "darkblue";
    //   bottomLeft.style.background = "#BDB76B";
    // }, 1200);
    // setTimeout(() => {
    //   topRight.style.background = "red";
    //   topLeft.style.background = "green";
    //   bottomRight.style.background = "blue";
    //   bottomLeft.style.background = "yellow";
    // }, 1700);
    // setTimeout(() => {
    //   topRight.style.background = "darkred";
    //   topLeft.style.background = "darkgreen";
    //   bottomRight.style.background = "darkblue";
    //   bottomLeft.style.background = "#BDB76B";
    // }, 2200);
    // setTimeout(() => {
    //   topRight.style.background = "red";
    //   topLeft.style.background = "green";
    //   bottomRight.style.background = "blue";
    //   bottomLeft.style.background = "yellow";
    // }, 2700);
    // setTimeout(() => {
    //   topRight.style.background = "darkred";
    //   topLeft.style.background = "darkgreen";
    //   bottomRight.style.background = "darkblue";
    //   bottomLeft.style.background = "#BDB76B";
    // }, 3200);
  } else {
    onButton.checked === false;
    turnCounter.innerHTML = "";
  }
});

startButton.addEventListener("click", (event) => {
  if (onButton.checked === true) {
    start = true;
    sequence();
  }
});

function sequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);
  turnCounter.innerHTML = gamePattern.length;
  // topLeft.style.backgroundColor = 'white'
  // [blue, yellow]
  setTimeout (() => {
    gamePattern.forEach((color) => {
      let patternColor = document.getElementById(`${color}`);
      let patternColorStyle = patternColor.style.backgroundColor;
      console.log(patternColor);
      patternColor.style.backgroundColor = 'white';
      setTimeout(() => {
        patternColor.style.backgroundColor = patternColorStyle;
      }, 500)
    })
  }, 500)
}
// async and await

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (onButton.checked === true) {
      let userClickedButton = event.target.id;
      // console.log(userClickedButton)
      checkAnswer(userClickedButton);
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.replace("pressed", "panel");
      }, 200);
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
    turnCounter.innerHTML = "-";
  }
}
