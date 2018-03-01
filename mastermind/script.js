let answer;
let guess = [];
let currentColors;
let choiceColor;
let depth;
let cellList;
let cellOn = "#cdaa7d";
let cellOff = "#666";
let chosenColor;

let levelSq = document.getElementById('levelsquares');
let levelSquares = levelSq.value;
levelSq.addEventListener('click', reassign);

let levelCo = document.getElementById('levelcolors');
let levelColors = document.getElementById('levelcolors').value;
let levelTu = document.getElementById('levelturns');
let levelTurns = document.getElementById('levelturns').value;
levelTu.addEventListener('click', numTurns);

let colors = [
  "#ee799f", //pink
  "#660066", //purple
  "#000080", //dark blue
  "#48d1cc", //light blue
  "#006400", //forest green
  "#ffff00", //yellow
  "#614126", //dark red
  "#ff0000", //bright red
]

let checkMark = document.querySelector('.check' + ((!depth) ? 0 : depth));

let choices = document.querySelectorAll('.choicebutton')
for (let i=0;i<choices.length;i++){
  choices[i].addEventListener('click', chooseColor);
}

let reset = document.getElementById('reset');
reset.addEventListener('click', resetFunc);

function createCells() {
  cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
  squareInit(levelSquares);
}
createCells();    

function squareInit(len) {
  for (let i=0;i<len;i++){
    cellList[i].style.backgroundColor = cellOn;
    cellList[i].style.cursor = "pointer";
    cellList[i].addEventListener('click', setColor);
  }
}

function reassign(e) {
  if( !e ) e = window.event;
  if (levelSquares !== e.target.value) { 
    levelSquares = e.target.value;
    resetFunc();
  }
}

function useColors(e) {
  if( !e ) e = window.event;
  if (levelColors !== e.target.value) { 
    levelColors = e.target.value;
    resetFunc();
  }  
}

function numTurns(e) {
  if( !e ) e = window.event;
  if (levelTurns !== e.target.value) { 
    levelTurns = e.target.value;
    resetFunc();
  }  
}

function createAnswer() {
  answer = [];
  let num;
  
  if (levelSquares == 4) {
    num = 4;
  } else if (levelSquares == 5) {
    num = 5;
  } 
  
  for (let i=0; i<num; i++) {
    answer.push(colors[Math.floor(Math.random() * (levelColors))]);
  }
}

function chooseColor(e) {
  if( !e ) e = window.event;
  console.log(e.target.innerHTML);
  chosenColor = document.getElementById('colorchoice');
  chosenColor.outerHTML = e.target.outerHTML;
  // chosenColor.value = e.target.innerText;
  // choiceColor = chosenColor.value;
  console.log(chosenColor.outerHTML);
}

function setColor(e) {
  let full = 0;
  if( !e ) e = window.event;
  e.target.style.backgroundColor = colors[choiceColor];
  e.target.value = choiceColor;
  for(let i=0; i<=levelSquares-1; i++) {
    if (cellList[i].style.backgroundColor && cellList[i].style.backgroundColor !== "rgb(205, 170, 125)") {
      full++;
    }
  }
  
  if (full == levelSquares) {
    checkMark = document.querySelector('.check' + ((!depth) ? 0 : depth))
    checkMark.style.color = "green";
    checkMark.style.cursor = "pointer";
    checkMark.addEventListener('click', submitAnswer);    
  }
}

function submitAnswer() {
  checkMark.style.color = "grey";
  checkMark.removeEventListener('click', submitAnswer);
  
  for (let i=0;i<cellList.length;i++){
    cellList[i].removeEventListener('click', setColor);
  }
  
  for (let i=0; i<levelSquares; i++){
    guess[i] = colors[cellList[i].value];
  }
  
  answer = (levelSquares == 4) ? ["#ee799f", "#660066", "#660066", "#660066"] : ["#ee799f", "#660066", "#660066", "#660066", "#660066"]; // REMOVE
  checkAnswer(guess, answer);
}

function checkAnswer(guess, answer) {
  let rightRight = 0;
  let rightWrong = 0;
  let hintList = document.querySelectorAll('.hintcell'+ ((!depth) ? 0 : depth));
  let done;
  
  for(let i=0; i<guess.length; i++) {
    if (guess[i]===answer[i]){
      rightRight++;
      answer.splice(i,1);
      guess.splice(i,1);
      i--;
    }
  }
  
  for(let i=0; i<guess.length; i++) {
    for (let x=0; x<answer.length; x++) {
      if (guess[i]===answer[x]){
        rightWrong++;
        answer.splice(x,1);
        guess.splice(i,1);
        i--;
      }
    }
  } 
  
  (!depth) ? depth=0: depth = depth;
  depth++;
  
  if(rightRight==levelSquares) {
    for(let x=0; x<rightRight; x++) {
      hintList[x].style.backgroundColor = 'black'; 
      gameOver("win");
    }
  } else if (depth >= levelTurns) {
    gameOver("lose");
  } else if(rightRight>0) {
    for(let x=0; x<rightRight; x++) {
      hintList[x].style.backgroundColor = 'black';
    }
  }
  
  for(let y=0; y<4; y++){
    if(hintList[y].style.backgroundColor !== "black" && rightWrong>0) {
      hintList[y].style.backgroundColor = "white";
      rightWrong--;
    }
  }
  
  if (document.getElementById('gameover').style.display == "none") {
    cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
  squareInit(levelSquares);
  }
}

function resetFunc() {
  document.getElementById('gameover').style.display = "none";
  checkMark.style.color = "grey";
  cellList2 = document.getElementsByClassName('rows');
  for (let i=0; i<cellList2.length; i++){
    cellList2[i].style.cursor = "auto"
    cellList2[i].style.backgroundColor = cellOff
    cellList2[i].removeEventListener('click', setColor);
  }
  hintList2 = document.getElementsByClassName('hints');
  for (let i=0; i<hintList2.length; i++){
    hintList2[i].style.backgroundColor = "transparent"
  }
  depth = 0;
  answer = [];
  createAnswer();
  cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
  squareInit((levelSquares === 4) ? 3 : 4);
  createCells();  
}

function gameOver(state) {
  if(state==="win") {
    console.log("yay!")
    document.getElementById('gameover').style.display = "flex";
    document.getElementById('gameover').innerText = "You Won!";
  } else if (state==="lose") {
    console.log("NO!!")
    document.getElementById('gameover').style.display = "flex";
    document.getElementById('gameover').innerText = "You Lost!";    
  }
}


createAnswer();
