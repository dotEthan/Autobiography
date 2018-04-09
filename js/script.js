'use strict';

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
  $('#mycanvas').css({'display': 'block'});
  setTextContent(textChange, 'has been built using lego. If you want to play with the blocks,');
  setTextContent(quoteChange, '“When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.”');
  setTextContent(quoteNameChange, '- C.S. Lewis');
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
  setTextContent(textChange, 'was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,');
  $('#mycanvas').css({'display': 'block'});
  $('link[rel=stylesheet]').attr({href : 'css/entrestyle.css'});
  timeOut = setTimeout(spirals, 1000);
  let timeOut2 = setTimeout(change, 1000);
});

function change() {
  theme = 'entre';
}
  
$('#programmerb').click(function() {
  $('#mycanvas').css({'display': 'none'});
  window.cancelAnimationFrame(animating); 
  setTextContent(textChange, 'was developed using Javascript, Jquery, HTML, and SCSS. If you want to look at the code,');
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

  // Puts focus on the newWindow
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
        "value": "#ffff00"
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
        "color": "#ffff00",
        "opacity": 0.4,
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

function spirals() {
 
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
  
  let dotArray1,dotArray2,dotArray3,dotArray4;
  function init() {
    dotArray1 = [];
    dotArray2 = [];
    dotArray3 = [];
    // dotArray4 = [];

    let bioDiv2 = $('#menu'); 
    let bioCenter2 = new Array( bioDiv2.width() * 0.16, bioDiv2.height() / 1.8 );
    let bioDiv = $('#biotab'); 
    let bioCenter = new Array( bioDiv.width() / 2 , bioDiv.height() / 1.8 );
    
    for(let i=0; i < numDots; i++) {
      dotArray1.push(new Dot(canvas.width/2, canvas.height/2));
      dotArray2.push(new Dot(canvas.width/3, canvas.height/2));
      dotArray3.push(new Dot(canvas.width/1.5, canvas.height/2));
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    dotArray1.forEach(singleDot => {
      singleDot.update();
    });

    dotArray2.forEach(singleDot => {
      singleDot.update();
    });

    dotArray3.forEach(singleDot => {
      singleDot.update();
    });
  }
  
  init();
  animate();

}



// const partyKill = window.pJSDom[0].pJS.fn.vendors.destroypJS();
