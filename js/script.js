let bioDist, historyDist, projectDist;
let bodyDone = 0,
soulDone = 0;


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

$('#bodyb').click(function() {
  if (bodyDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    setTextContent(textChange, 'has been built using lego. If you want to play with the blocks,');
    pageDelay(showPage);
    bodyDone++;
  }
  $('link[rel=stylesheet]').attr({href : '../css/bodystyle.css'}); 
  setTimeout(circles, 1000);
});

$('#mindb').click(function() {
  $('link[rel=stylesheet]').attr({href : 'css/style.css'}); 
  setTextContent(textChange, 'was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,');
  setTimeout(party, 1000);
});
  
$('#soulb').click(function() { 
  if (soulDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    setTextContent(textChange, 'was developed using Javascript, Jquery, HTML, and SCSS. If you want to look at the code,');
    pageDelay();
    soulDone++;
  }
  $('link[rel=stylesheet]').attr({href : 'css/soulstyle.css'}); 
});

//-----------------------
//Text Fade
//-----------------------

$(biopersonal).stop().animate({
  'opacity': 0
}, 0);

$('#biocontain').hover(function () {
    $(biowriting).stop().animate({
        'opacity': 0
    }, 1500);
    $(biopersonal).stop().animate({
        'opacity': 1
    }, 1000);
}, function () {
    $(biowriting).stop().animate({
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
  
  
document.addEventListener('scroll', function () {
  if ($(window).scrollTop() < bioDist) {
    $('.menutabs a').removeClass('menunow');
  } else if ($(window).scrollTop() > bioDist && ($(window).scrollTop() < historyDist)) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#bioslice"]').addClass('menunow');
  } else if ($(window).scrollTop() > historyDist && $(window).scrollTop() < projectDist) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#historyslice"]').addClass('menunow');
  } else if ($(window).scrollTop() > projectDist) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#projectslice"]').addClass('menunow');
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
        "value": 300,
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
  let canvas = document.querySelector('canvas');
  canvas.width = document.querySelector('canvas').offsetWidth;
  canvas.height = document.querySelector('canvas').offsetHeight;
  let c = canvas.getContext('2d');
  let topRadius = 30;
  let colorArray = [
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
    canvas.width = document.querySelector('canvas').offsetWidth;
    canvas.height = document.querySelector('canvas').offsetHeight;
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
    for (let i =0; i<150; i++) {
      let radius = Math.random() * 10;
      let x = Math.random() * (canvas.width - radius*2) + radius;
      let y = Math.random() * (canvas.height - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 4;
      let dy = (Math.random() - 0.5 )* 4;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, innerHeight);

    for(let i=0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  init();
  animate();
}