import { wordsArray } from "./words.js";
import { elements } from "./grid.js";

const topLetter = document.getElementById("firstRow");
const leftLetter = document.getElementById("secondRow");
const rightLetter = document.getElementById("thirdRow");
const bottomLetter = document.getElementById("fourthRow");
const boxDiv = document.querySelector(".boxes");

let isPress = false;
const frame = document.querySelector(".wheel");
let list = [];
let listId = [];


const startLetter = (e) => {
  isPress = true;
  if (e.target.innerHTML) {
    list.push(e.target.innerHTML);
    listId.push(e.target.id);
    e.target.style.background = "red";
  }

  if (e.target.classList == "wheel") {
    e.target.style.background = "white";
  }
};

const mouseOver = (e) => {
  if (isPress) {
    if (!listId.includes(e.target.id)) {
      list.push(e.target.innerHTML);
      listId.push(e.target.id);
      e.target.style.background = "red";
    }
  }
};

const finish = () => {
  isPress = false;
  console.log(isPress);

  list = list.join("");

  if (wordsArray.wordCombinations.includes(list)) {
    if (list.length === 4) {
      if (list[0] === "K" && list[1] === "A") {
        square14.innerHTML = list[0];
        square21.innerHTML = list[1];
        square28.innerHTML = list[2];
        square35.innerHTML = list[3];
      }

      if (list[0] === "K" && list[1] === "I") {
        square14.innerHTML = list[0];
        square15.innerHTML = list[1];
        square16.innerHTML = list[2];
        square17.innerHTML = list[3];
      }

      if (list[0] === "A") {
        square17.innerHTML = list[0];
        square24.innerHTML = list[1];
        square31.innerHTML = list[2];
        square38.innerHTML = list[3];
      }

      if (list[0] === "T") {
        square24.innerHTML = list[0];
        square25.innerHTML = list[1];
        square26.innerHTML = list[2];
        square27.innerHTML = list[3];
      }
    }

    if (list.length === 3) {
      square16.innerHTML = list[0];
      square9.innerHTML = list[1];
      square2.innerHTML = list[2];
    }
  }
  //Resetting list and listId
  list = [];
  listId = [];

  document.getElementById("0").style.background = "white";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.background = "white";
};

frame.onmousedown = startLetter;
frame.onmouseup = finish;

wordsArray.letters.forEach((item, index) => {
  const elDiv = document.createElement("div");
  elDiv.id = index;
  elDiv.classList.add("letter");
  elDiv.innerHTML = item;
  elDiv.onmouseover = mouseOver;
  frame.appendChild(elDiv);
});

let squares = document.querySelector(".container").children;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = "black";
}

//LABRYNTH DECLERATION
let square2 = document.getElementById("square2");
let square9 = document.getElementById("square9");
let square14 = document.getElementById("square14");
let square15 = document.getElementById("square15");
let square16 = document.getElementById("square16");
let square17 = document.getElementById("square17");
let square21 = document.getElementById("square21");
let square24 = document.getElementById("square24");
let square25 = document.getElementById("square25");
let square26 = document.getElementById("square26");
let square27 = document.getElementById("square27");
let square28 = document.getElementById("square28");
let square31 = document.getElementById("square31");
let square35 = document.getElementById("square35");
let square38 = document.getElementById("square38");

//Exceptions
square2.style.background = "#e3e3e3";
square9.style.background = "#e3e3e3";
square14.style.background = "#e3e3e3";
square15.style.background = "#e3e3e3";
square16.style.background = "#e3e3e3";
square17.style.background = "#e3e3e3";
square21.style.background = "#e3e3e3";
square24.style.background = "#e3e3e3";
square25.style.background = "#e3e3e3";
square26.style.background = "#e3e3e3";
square27.style.background = "#e3e3e3";
square28.style.background = "#e3e3e3";
square31.style.background = "#e3e3e3";
square35.style.background = "#e3e3e3";
square38.style.background = "#e3e3e3";

