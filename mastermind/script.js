let winnerColors = [];
let currentColors;
let choiceColor;

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

let choices = document.querySelectorAll('.choicebutton')
for (let i=0;i<choices.length;i++){
  choices[i].addEventListener('click', chooseColor);
}

function chooseColor(e) {
  if( !e ) e = window.event;
  let chosenColor = document.getElementById('colorchoice');
  chosenColor.style.backgroundColor = colors[e.target.innerText];
}

