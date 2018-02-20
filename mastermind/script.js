let winnerColors = [];
let currentColors;

let colors = [
  "#ee799f", //pink
  "#da70d6", //purple
  "#000080", //dark blue
  "#48d1cc", //light blue
  "#A2B5CD", //grey
  "#006400", //forest green
  "#caff70", //bright green
  "#8b2323", //dark red
  "#ff4040", //bright red
  "#ff7f24", //orange
  "#ffff00", //yellow
] 

function pickColors() {
  for (let i = 0; i<4; i++){
    winnerColors.push(Math.floor(Math.random()*10));
  }
}
pickColors();
console.log(winnerColors);

function reset() {
}

