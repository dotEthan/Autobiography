'use strict';

// USING?



//------------------------
// Typewrite
//------------------------

(function($){$.fn.typeWrite=function(s){
  let o={content:$(this).text(),delay:50,t:this,i:0};
  if(s){$.extend(o,s);}o.t.text('');
  let i=setInterval(function() {
      o.t.text(o.t.text()+o.content.charAt(o.i++));    
      if(o.i==o.content.length){clearInterval(i);}}
  ,o.delay);
return o.t;  
};})(jQuery);
$('#namemotto').typeWrite({content:'Student, Programmer, Entrepreneur'});

/// /USING?

let bioDist, historyDist, projectDist;
let studentDone = 0,
entreDone = 0;
let timeOut;
let animating;
let theme = "programmer";

//-----------------------
//Loading
//-----------------------

let myVar;

function pageDelay(funi) {
    myVar = setTimeout(funi, 500);
}

function showPage() {
  $('#load').css({'display': 'none'});
  $('#contents').css({'display': 'block'});
  resizeDist();
  resizeHover();
  party();
}

pageDelay(showPage);

//-----------------------
//Alterations
//-----------------------
function setTextContent(element, text) {
  while (element.firstChild!==null)
      element.removeChild(element.firstChild); // remove all existing content
  element.appendChild(document.createTextNode(text));
}

let textChange = document.getElementById('sitebuild');
let quoteChange = document.getElementById('biowriting');
let quoteNameChange = document.getElementById('quotename');
let languageChange = document.getElementById('languagetitle');
let languageChange2 = document.getElementById('languagetitlec');
let bioChange = document.getElementById('ageinfo');

$('#studentb').click(function() {
  window.cancelAnimationFrame(animating); 
  $('#particles-js').css({'display': 'none'});
  if (studentDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    pageDelay(showPage);
    studentDone++;
  }
  $('link[rel=stylesheet]').attr({href : '../css/studentstyle.css'}); 
  theme = "student";
  $('#entrebgcanvas').css({'display': 'none'});
  $('#mycanvas').css({'display': 'block'});
  setTextContent(textChange, 'has been built using lego. If you want to play with the blocks,');
  setTextContent(quoteChange, '“When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.”');
  setTextContent(quoteNameChange, '- C.S. Lewis');
  setTextContent(languageChange, 'Languages: English'); 
  setTextContent(languageChange2, '');
  setTextContent(bioChange, 'I grew up in small town Ontario, than big city BC, then small town BC, then small town Manitoba, than back to BC for a couple cities and then back to Ontario, we moved a lot. I think it is one of the reasons I find I am able to easily adapt to the various environments I find myself in.');
  timeOut = setTimeout(circles, 1000);
});

$('#entreb').click(function() {
  window.cancelAnimationFrame(animating); 
  $('#particles-js').css({'display': 'none'});
  if (entreDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    pageDelay(showPage);
    entreDone++;
  }
  $('#entrebgcanvas').css({'display': 'block'});
  $('#mycanvas').css({'display': 'block'});
  setTextContent(textChange, 'was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,');
  setTextContent(quoteChange, '“From my very first day as an entrepreneur, I\'ve felt the only mission worth pursuing in business is to make people\'s lives better.”');
  setTextContent(quoteNameChange, '- Richard Branson');
  setTextContent(languageChange, 'Languages: English, Chinese');
  setTextContent(languageChange2, 'Languages: HTML, CSS, Wordpress');
  setTextContent(bioChange, 'I spent my 20s in China, learning a new culture, language and how to develop long term plans and put them into action. I had numerous jobs from Bar Manager to Radio Host. And I developed and opened a number of different entreprenerial ventures that pushed me to learn web development, leadership skills and to hone my customer service techniques.');
  $('link[rel=stylesheet]').attr({href : 'css/entrestyle.css'});
  timeOut = setTimeout(spirals, 1000);
  let timeOut2 = setTimeout(change, 1000);
});

function change() {
  theme = 'entre';
}
  
$('#programmerb').click(function() {
  $('#entrebgcanvas').css({'display': 'none'});
  $('#mycanvas').css({'display': 'none'});
  window.cancelAnimationFrame(animating); 
  setTextContent(textChange, 'was developed using Javascript, Jquery, HTML, and SCSS. If you want to look at the code,');
  setTextContent(quoteChange, '"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."');
  setTextContent(quoteNameChange, '- Brian W. Kernighan');
  setTextContent(languageChange, 'Languages: English, Chinese');  
  setTextContent(languageChange2, 'Languages: Javascript, React, Jquery, HTML, CSS, SCSS, Wordpress, Liquid, Gulp, Git, npm');
  setTextContent(bioChange, 'Since returning to Canada I have opened two successful entreprenuerial ventures and learned a number of new langauges including Javascript, SCSS, React, Liquid and more. I\'ve devoted the last six months to brushing up on HTML 5, SCSS, Javascript ES6 and learning React to ensure I have a firm grasp of the tools needed to succeed in Front End Development or Javavscript programming.');
  pageDelay(showPage);
  $('#particles-js').css({'display': 'block'});
  $('link[rel=stylesheet]').attr({href : 'css/style.css'}); 
  theme = 'programmer';
  timeOut = setTimeout(party, 1000); 
});

//-----------------------
//Text Fade
//-----------------------

$(biopersonal).stop().animate({
  'opacity': 0
}, 0);

$('#biocontain').hover(function () {
    $(bioquote).stop().animate({
        'opacity': 0
    }, 1500);
    $(biopersonal).stop().animate({
        'opacity': 1
    }, 1000);
}, function () {
    $(bioquote).stop().animate({
        'opacity': 1
    }, 1000);
    $(biopersonal).stop().animate({
        'opacity': 0
    }, 1000);

}); 

$('.historytext').stop().animate({
  'opacity': 0
}, 0);

$('.flexbox-slide').hover(function (e) {
  let icons = $(this).find('.historyicons');
  let text = $(this).find('.historytext');

  icons.stop().animate({
      'opacity': 0
  }, 500);
  text.stop().animate({
      'opacity': 1
  }, 1000);
}, function () {
  let icons = $(this).find('.historyicons');
  let text = $(this).find('.historytext');
  icons.stop().animate({
      'opacity': 1
  }, 1000);
  text.stop().animate({
      'opacity': 0
  }, 1000);

}); 

//-----------------------
// Scrolling Position
//-----------------------
function resizeDist() {
  historyDist = $('#historyslice').offset().top;
  bioDist = $('#bioslice').offset().top;
  projectDist = $('#projectslice').offset().top;
}
  
// jQuery  UI Animations?
document.addEventListener('scroll', function () {
  const menuTabs = $('.menutabs a'); 
  if ($(window).scrollTop() < bioDist) {
    menuTabs.removeClass('menunow');
  } else if ($(window).scrollTop() > bioDist && ($(window).scrollTop() < historyDist)) {
    menuTabs.removeClass('menunow');
    $('a[href="#bioslice"]').addClass('menunow');
  } else if ($(window).scrollTop() > historyDist && $(window).scrollTop() < projectDist) {
    menuTabs.removeClass('menunow');
    $('a[href="#historyslice"]').addClass('menunow');
  } else if ($(window).scrollTop() > projectDist) {
    menuTabs.removeClass('menunow');
    $('a[href="#projectslice"]').addClass('menunow');
  }

  if(theme=='entre') {
    const menuDiv = $('#menucontain');
    const bottomSpot = bioDist - parseInt(menuDiv.css('height'));

    if ($(this).scrollTop() >= bottomSpot) {
      menuDiv.removeClass('menubottom').addClass('menutop');
    } else if ($(this).scrollTop() < bottomSpot) {
      menuDiv.removeClass('menutop').addClass('menubottom');
    }
  }
}, true);

//------------------------ 
// Project Overlay
//------------------------

$('#projectoverlay').hide();

function PopupCenter(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  if (window.focus) {
      newWindow.focus();
  }
}

$('#closeover').click(function() {
  $('#projectoverlay').hide();
});

$('#freggie').click(function() {
  $('#projectoverlay').show();
});

//------------------------
// Resizing Hovers
//------------------------
function resizeHover() {
    let projectWidth = $('.project').width().toString();
    let projectHeight = $('.project').height().toString();
    $('.bottom').css({ borderBottomWidth: projectHeight + 'px', borderLeftWidth: projectWidth + 'px' });
    $('.top').css({ borderRightWidth: projectWidth + 'px', borderTopWidth: projectHeight + 'px' });
}
//------------------------
// Contact Appear
//------------------------

$('#contactme, #contactmebut, #footercontact').on('click', () => {
  $('#contactslice').show();
});

$('#contactclose').on('click', () => $('#contactslice').hide());

//------------------------
// Contact Form
//------------------------

$('#submit').click(function(e) {

  let fname = $('#name').val();
  let phone = $('#phone').val();
  let email = $('#email').val();
  let inquiry = $('#inquiry').val();
  $('#returnmessage').empty(); // To empty previous error/success message.
  
  // Checking for blank fields
  if (fname == '' || email == '' || inquiry == '') {
    alert('Please Fill Required Fields');
    e.preventDefault();
  } else {
    // Returns successful data submission message when the entered information is stored in database.
    $.post('../php/contact_form1.php', {
      fname1: fname,
      phone1: phone,
      email1: email,
      inquiry1: inquiry
      
      }, function(data) {
        $('#returnmessage').append(data); // Append returned message to message paragraph.
        
        if (data == 'Your Query has been received, We will contact you soon.') {
          $('#inquiryform')[0].reset(); // To reset form fields on success.
      }
    });
    e.preventDefault();
  }
});

//------------------------
// Particles
//------------------------

function party() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 400
        }
      },
      "color": {
        "value": "#ff00ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff00ff",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 100,
          "size": 20,
          "duration": 2,
          "opacity": 2,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });
}

//------------------------
// circles
//------------------------

function circles() {
  const canvas = document.querySelector('#mycanvas');
  canvas.width = document.querySelector('#mycanvas').scrollWidth;
  canvas.height = window.innerHeight;;
  const c = canvas.getContext('2d');
  const topRadius = 30;
  const colorArray = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ff00ff',
  ]

  let mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  })

  window.addEventListener('resize', function() {
    canvas.width = document.querySelector('#mycanvas').offsetWidth;
    canvas.height = document.querySelector('#mycanvas').offsetHeight;
    init();
  });

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dx;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
      if (this.radius <= 0) {
        this.radius = this.minRadius;
      }
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      c.fillStyle = this.color;
      c.fill();
    }

    this.update = function() {
      if (this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
        this.dy = -this.dy;
      }
      if (this.x + this.radius > canvas.width|| this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      this.x+=this.dx;
      this.y+=this.dy;

      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < topRadius) {
          this.radius += 1; 
        }
      } else if (this.radius > this.minRadius){
        this.radius -= 1;
      }

      this.draw();
    }
  }

  let circleArray = [];
  function init() {
    circleArray = [];
    for (let i =0; i<50; i++) {
      let radius = Math.random() * 10;
      let x = Math.random() * (canvas.width - radius*2) + radius;
      let y = Math.random() * (canvas.height - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 3;
      let dy = (Math.random() - 0.5 )* 3;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }

  function animate() {
    c.clearRect(0,0, canvas.width, innerHeight);
    animating = requestAnimationFrame(animate);
    if (!timeOut) return;
    for(let i=0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  init();
  animate();
}

//------------------------
// Spinning balls
//------------------------

function spirals() {
  // (ctx, x, y, width, height, radius, fill, stroke)
  // const canvas2 = document.getElementById('entrebgcanvas');
  // const c2 = canvas2.getContext('2d');
  // c2.fillStyle = 'blue';
  // c2.fill();
  // roundRect(c2, 0, 0, 50, 50, 10, 'blue', false);

 
  const canvas = document.getElementById('mycanvas');
  const c = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = 150;
  const numDots = 5;
  const outDistance = randomInt(20, 40);
  const inDistance = 5;
  let testLineY;
  
  const mouse = {
    x: innerWidth/2,
    y: innerHeight/2
  };

  const colorArray = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff'
  ];
  
  addEventListener('mousemove', event => {
    mouse.x = event.clientX; //Changeing?
    mouse.y = event.clientY;
    
    if (theme == 'entre') {
      testLineY = event.pageY - ($('#bioslice').position().top - 150);
    }
  });
  
  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = 150;
    init();
  });
  
  
  function randomColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  
  function randomInt(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
  }
  
  function Dot(x, y) {
    this.x = x;
    this.y = y;
    this.radius = randomInt(3,7);
    this.color = randomColor();
    this.radians = Math.random() * Math.PI*2;
    this.velocity = randomInt(15, 40)/1000;
    this.distance = randomInt(30, 50);
    let origDist = JSON.parse(JSON.stringify(this.distance))
    
    this.update = () => {
      if (testLineY - y < 30 && testLineY - y > -60 && mouse.x - x < 40 && x - mouse.x < 40) {
        if (this.distance > inDistance) {
          this.distance = this.distance - 2;
        }
      } else {
        if (this.distance < origDist) {
          this.distance++;
        }
      }
      
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distance;
      this.y = y + Math.sin(this.radians) * this.distance;
      
      this.draw();
    };
    
    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }
  
  let dotArray1,dotArray2,dotArray3,dotArray4, bioCenter1, bioCenter2, bioCenter3, bioCenter4;
  const bioDiv1 = $('#menu');

  function init() {
    dotArray1 = [];
    dotArray2 = [];
    dotArray3 = [];
    dotArray4 = []; 
    bioCenter1 = new Array( bioDiv1.width() * 0.16, bioDiv1.height() / 1.8 );
    bioCenter2 = new Array( bioDiv1.width() * 0.428, bioDiv1.height() / 1.8 );
    bioCenter3 = new Array( bioDiv1.width() * 0.697, bioDiv1.height() / 1.8 );
    bioCenter4 = new Array( bioDiv1.width() * 0.964, bioDiv1.height() / 1.8 );


    for(let i=0; i < numDots; i++) {
      dotArray1.push(new Dot(bioCenter1[0], bioCenter1[1]));
      dotArray2.push(new Dot(bioCenter2[0], bioCenter2[1]));
      dotArray3.push(new Dot(bioCenter3[0], bioCenter3[1]));
      dotArray4.push(new Dot(bioCenter4[0], bioCenter4[1]));
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width, canvas.height);

    dotArray1.forEach(singleDot => {
      singleDot.update();
    });

    dotArray2.forEach(singleDot => {
      singleDot.update();
    });

    dotArray3.forEach(singleDot => {
      singleDot.update();
    });

    dotArray4.forEach(singleDot => {
      singleDot.update();
    });
  }
  
  init();
  animate();

}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}