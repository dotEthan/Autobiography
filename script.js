
window.onload = function() {
  //init canvas
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  
  //Window Size
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  
  //create particle list
  var maxp = 50; 
  var particles = [];
  for (let i = 0; i < maxp; i++) {
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*4+1,
      d: Math.random()*maxp
    })
  }
  
  //draw the flakes
  function draw() {
    ctx.clearRect(0,0,w,h);
    canvas.style.webkitFilter = "blur(1px)";
    ctx.fillStyle = "rgba(242,242,242, 0.8)";
    ctx.beginPath();
    for(let j = 0; j < maxp; j++) {
      let p = particles[j];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    update();
  }
  
  //make particles move
  let angle = 0;
  function update() {
    
  
  console.log(particles); 
    angle += 0.01;
    for (let i=0; i < maxp; i++) {
      let p = particles[i];
      p.x += Math.sin(angle) * 3;
      p.y += Math.cos(angle+p.d)+ 1 + p.r/2;
      
      if (p.x > w || p.x < 0 || p.y > h) {
        if(i%3 > 0) {
          particles[i] = {x: Math.random() * w, y: -10, r: p.r, d: p.d};
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = {x: -5, y: Math.random()*h, r: p.r, d: p.d};
          } else {
            particles[i] = {x: w+5, y: Math.random()*h, r: p.r, d: p.d};
          }
        }
      }
    }
  }
  
  setInterval(draw,33);
}
