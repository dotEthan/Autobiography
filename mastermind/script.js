let answer = [];
let guess = [];
let currentColors;
let choiceColor;
let depth = 0;
let checkMark;

let colors = [
  "#ee799f", //pink
  "#660066", //purple
  "#000080", //dark blue
  "#48d1cc", //light blue
  "#006400", //forest green
  "#caff70", //bright green
  "#800000", //dark red
  "#ff0000", //bright red
  "#663300", //brown
  "#ffff00", //yellow
]

let cellList = document.querySelectorAll('.row'+depth);
for (let i=0;i<cellList.length;i++){
  cellList[i].addEventListener('click', setColor);
}

let choices = document.querySelectorAll('.choicebutton')
for (let i=0;i<choices.length;i++){
  choices[i].addEventListener('click', chooseColor);
}

let level = document.querySelector('#level').value;

function createAnswer() {
  let num;
  
  if (level == 0) {
    num = 4;
  } else if (level == 1) {
    num = 6;
  } else if (level == 2) {
    num = 8;
  } else if (level == 3) {
    num = 10;
  } 
  
  for (let i=0; i<num; i++) {
    answer.push(colors[Math.floor(Math.random() * num)]);
  }
}

function chooseColor(e) {
  if( !e ) e = window.event;
  let chosenColor = document.getElementById('colorchoice');
  chosenColor.style.backgroundColor = colors[e.target.innerText];
  chosenColor.value = e.target.innerText;
  choiceColor = chosenColor.value;
}

function setColor(e) {
  if( !e ) e = window.event;
  e.target.style.backgroundColor = colors[choiceColor];
  e.target.value = choiceColor;
  for(let i=0; i<cellList.length; i++) {
    if (!cellList[i].style.backgroundColor) {
      break;
    }
    checkMark = document.querySelector('.check');
    checkMark.style.color = "green";
    checkMark.style.cursor = "pointer";
    checkMark.addEventListener('click', submitAnswer);    
  }
}

function submitAnswer() {
  document.querySelector('.check').style.color = "grey";
  checkMark.removeEventListener('click', submitAnswer);
  for (let i=0; i<cellList.length; i++){
    guess[i] = colors[cellList[i].value];
  }
  answer = ["#ee799f", "#660066", "#660066", "#660066"]
  checkAnswer(guess, answer);
}

function checkAnswer(guess, answer) {
  let rightRight = 0;
  let rightWrong = 0;
  let answerPair= [];
  let hintList = document.querySelectorAll('.hintcell'+depth);
  console.log(answer);
  answer.forEach((item, i) => {
    console.log(item);
    answerPair.push({'item': i})
  });
  console.log(answerPair);
  for(let i=0; i<answer.length; i++) {
    if(guess[i]==answer[i]){
      rightRight++;
    } else if(answer.indexOf(guess[i])>=0 && answer.indexOf(guess[i])!==i){
      rightWrong++;
    }
  }
  
  if(rightRight==4) {
    for(let x=0; x<rightRight; x++) {
      hintList[x].style.backgroundColor = 'black'; 
      gameOver("win");
    }
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
}

function gameOver(state) {
  if(state==="win") {
    console.log("yay!")
    document.getElementById('gameover').style.display = "flex";
    document.getElementById('gameover').innerText = "You Won!";
  }
}


createAnswer();
