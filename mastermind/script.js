let answer;
let guess = [];
let currentColors;
let choiceColor;
let depth;
let cellList;
let chosenColor;

let score = document.getElementById('score').innerText;
let highScore = document.getElementById('highscore').innerText;

let levelCo = document.getElementById('levelcolors');
let levelColors = document.getElementById('levelcolors').value;
levelCo.addEventListener('click', useColors);

let levelSq = document.getElementById('levelsquares');
let levelSquares = levelSq.value;
levelSq.addEventListener('click', reassignSq);

let levelTu = document.getElementById('levelturns');
let levelTurns = document.getElementById('levelturns').value;
levelTu.addEventListener('click', numTurns);

let colors = [
  "#f066f4", //pink
  "#660066", //purple
  "#000080", //dark blue
  "#48d1cc", //light blue
  "#006400", //forest green
  "#ffff00", //yellow
  "#614126", //dark red
  "#ff0000", //bright red
]

let checkMark = document.querySelector('.check' + ((!depth) ? 0 : depth));

let choices = document.querySelectorAll('.choice')
for (let i=0;i<choices.length;i++){
  choices[i].addEventListener('click', chooseColor);
}

let reset = document.getElementById('reset');
reset.addEventListener('click', resetFunc);

function squareInit() {
  cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
  for (let i=0;i<levelSquares;i++){
    cellList[i].style.cursor = "pointer";
    cellList[i].style.border = "1px solid red";
    cellList[i].addEventListener('click', setColor);
  }
}
squareInit(); 

function turnInit() {
  let rowList = document.getElementsByClassName('cell');
  let rowsList = document.getElementsByClassName('rows');
  for (let i=0;i<(levelTurns * 5);i++){
    rowList[i].style.backgroundColor = "white";
    if(!rowsList[i].style.border){
      rowsList[i].style.border = "1px solid white";
    }
  }
  for (let x=49;x>=(50-(10-levelTurns)*5); x--){
    rowsList[x].style.border = "1px solid grey";
  }
}
turnInit();

function colorsInit() {
  for(let x=0; x<choices.length; x++) {
    choices[x].addEventListener('click', chooseColor);
    choices[x].style.boxShadow = "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3f3f7a 0 2px 14px";
    choices[x].style.backgroundColor = colors[x];
  }
  for (let i=7;i>(levelColors-1);i--) {
    choices[i].removeEventListener('click', chooseColor)
    choices[i].style.boxShadow = "none";
    choices[i].style.backgroundColor = "#2f4f4f";
  }
}

colorsInit();

function reassignSq(e) {
  if( !e ) e = window.event;
  if (levelSquares !== e.target.value) {
    levelSquares = e.target.value;
    resetFunc();
  }
}

function useColors(e) {
  if( !e ) e = window.event;
  if (levelColors != e.target.value) {
    levelColors = e.target.value;
    colorsInit();
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
  let former = e.target;
  let bg = window.getComputedStyle(former, null).getPropertyValue("background-color");
  let bgShadow = window.getComputedStyle(former, null).getPropertyValue("box-shadow");
  chosenColor = document.querySelector('.chosen');
  chosenColor.style.backgroundColor = bg;
  chosenColor.style.boxShadow = bgShadow;
  let rgbColor = chosenColor.style.backgroundColor;
  hexColor = rgbToHex(rgbColor);
  for(let i=0;i<colors.length;i++){
    if (colors[i] === hexColor) {
      choiceColor = i;
    }
  }
}

function rgbToHex(col) {
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

function setColor(e) {
  let full = 0;
  if( !e ) e = window.event;
  e.target.style.backgroundColor = colors[choiceColor];
  e.target.value = choiceColor;
  for(let i=0; i<=levelSquares-1; i++) {
    if (cellList[i].style.backgroundColor && cellList[i].style.backgroundColor !== "rgb(102, 102, 102)") {
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
  
  answer = (levelSquares == 4) ? ["#f066f4", "#660066", "#660066", "#660066"] : ["#f066f4", "#660066", "#660066", "#660066", "#660066"]; // REMOVE
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
    }
    gameOver("win");
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
  
  if (!document.getElementById('gameover').style.display) {
    document.getElementById('gameover').style.display = "none";
  }
  if (document.getElementById('gameover').style.display == "none") {
    cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
    squareInit(levelSquares);
  }
}

function resetFunc() {
  score = 0;
  document.getElementById('score').innerText = 0;
  document.getElementById('gameover').style.display = "none";
  checkMark.style.color = "grey";
  
  cellList2 = document.getElementsByClassName('rows');
  for (let i=0; i<cellList2.length; i++){
    cellList2[i].style.cursor = "auto"
    cellList2[i].style.border = "1px solid white";
    cellList2[i].style.backgroundColor = "#666";
    cellList2[i].removeEventListener('click', setColor);
  }
  
  hintList2 = document.getElementsByClassName('hints');
  for (let i=0; i<hintList2.length; i++){
    hintList2[i].style.backgroundColor = "transparent"
  }
  
  rowList2 = document.getElementsByClassName('cell');
  for (let i=0; i<(rowList2.length * levelSq); i++){
    rowList2[i].style.backgroundColor = "RGBA(147, 123, 94, 0.4);"
  }
  
  let rowList = document.getElementsByClassName('cell');
  for (let i=0;i<50;i++){
    rowList[i].style.backgroundColor = "grey";
  }
  
  depth = 0;
  answer = [];
  createAnswer();
  cellList = document.querySelectorAll('.row' + ((!depth) ? 0 : depth));
  turnInit();
  squareInit((levelSquares === 4) ? 3 : 4);
}

function findScore() {
  score = ((levelColors * 200) + (levelSquares * 200) + (4000/levelTurns));
}

function gameOver(state) {
  if(state==="win") {
    findScore();
    document.getElementById('score').innerText = score;
    highscore = document.getElementById('highscore');
    console.log(document.getElementById('score').innerText);
    document.getElementById('gameover').style.display = "flex";
    document.getElementById('gameover').innerText = "You Won!";
    if (score>highScore) {
      highScore = score;
      document.getElementById('highscore').innerText = highScore; 
    }
  } else if (state==="lose") {
    console.log("NO!!")
    document.getElementById('gameover').style.display = "flex";
    document.getElementById('gameover').innerText = "You Lost!";    
  }
}


createAnswer();
