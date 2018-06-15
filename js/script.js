'use strict';

// USING?

// Call everything same order?
// Programmer mobile animation doesn't stop when you go to student then back.



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

let bioDist, historyDist, projectDist, contactDist;
let studentDone = 0,
entreDone = 0;
let timeOut;
let animating;
let theme = "programmer";
let large;

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
let asaChange = document.getElementById('asa');
let quoteNameChange = document.getElementById('quotename');
let languageChange = document.getElementById('languagetitle');
let languageChange2 = document.getElementById('languagetitlec');
let bioChange = document.getElementById('ageinfo');

$('#studentb').click(function() {
  window.cancelAnimationFrame(animating); 
  if (studentDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    pageDelay(showPage);
    studentDone++;
  }
  $('link[rel=stylesheet]').attr({href : '../css/studentstyle.css'}); 
  theme = "student";
  setTextContent(textChange, 'has been built using lego. If you want to play with the blocks,');
  setTextContent(quoteChange, '“When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.”');
  setTextContent(quoteNameChange, '- C.S. Lewis');
  // setTextContent(languageChange, 'Languages: English'); 
  // setTextContent(languageChange2, 'Lego');
  setTextContent(asaChange, 'As a Student:');
  setTextContent(bioChange, 'I grew up in small town Ontario, than big city BC, then small town BC, then small town Manitoba, than back to BC for a couple cities and then back to Ontario. We moved a lot. It is likely one of the reasons I am able to easily adapt to the various environments life takes me to.');
  $("#personalimg").attr("src","../images/bios.jpg");
  doneResizing();
});

$('#entreb').click(function() {
  window.cancelAnimationFrame(animating); 
  if (entreDone == 0) {
    $('#load').css({'display': 'block'});
    $('#contents').css({'display': 'none'});
    pageDelay(showPage);
    entreDone++;
  }
  $('link[rel=stylesheet]').attr({href : 'css/entrestyle.css'});
  theme = 'entre';
  setTextContent(textChange, 'was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,');
  setTextContent(quoteChange, '“From my very first day as an entrepreneur, I\'ve felt the only mission worth pursuing in business is to make people\'s lives better.”');
  setTextContent(quoteNameChange, '- Richard Branson');
  // setTextContent(languageChange, 'Languages: English, Chinese');
  // setTextContent(languageChange2, 'HTML, CSS, Wordpress, Jqeury');
  setTextContent(asaChange, 'As an Entrepreneur:');
  setTextContent(bioChange, 'I spent my 20s in China, learning a new culture, language and how to develop long term plans and put them into action. I had numerous jobs including Bar Manager, University professor, Radio Host and more. And I developed and opened a number of different entreprenerial ventures that pushed me to learn web development, leadership skills and to hone my customer service techniques.');
  $("#personalimg").attr("src","../images/bioe.jpg");
  doneResizing();
});
  
$('#programmerb').click(function() {
  $('link[rel=stylesheet]').attr({href : 'css/style.css'}); 
  theme = 'programmer';
  $('#entrebgcanvas').css("display", "none");
  window.cancelAnimationFrame(animating); 
  setTextContent(textChange, 'was developed using Javascript, Jquery, HTML, and SCSS. If you want to look at the code,');
  setTextContent(quoteChange, '"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."');
  setTextContent(quoteNameChange, '- Brian W. Kernighan');
  // setTextContent(languageChange, 'Languages: English, Chinese');  
  // setTextContent(languageChange2, 'Javascript, React, Jquery, HTML, CSS, SCSS, Wordpress, Liquid, Photoshop');
  setTextContent(asaChange, 'As a Programmer:');
  setTextContent(bioChange, 'Since returning to Canada I have opened two successful entreprenuerial ventures and learned a number of new langauges including Javascript, SCSS, React, Liquid and more. I\'ve devoted the last six months to brushing up on HTML 5, SCSS, Javascript ES6 and learning React to ensure I have a firm grasp of the tools needed to succeed as a Front End Development or Javavscript programming.');
  $("#personalimg").attr("src","../images/biop.jpg");
  pageDelay(showPage);
  doneResizing();
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

//-----------------------
// Scrolling Position
//-----------------------
function resizeDist() {
  historyDist = $('#historyslice').offset().top;
  bioDist = $('#bioslice').offset().top;
  projectDist = $('#projectslice').offset().top;
  contactDist = parseInt($('#projectslice').offset().top) + parseInt($('#projectslice').css('height'));
}

function addRemove(atId) {
  let menuTabArray = $('.menutabs');
  for (let i=0; i< menuTabArray.length; i++) {    
    if (menuTabArray[i].id === atId){
      menuTabArray.eq(i).addClass('menudark');
    } else {
      menuTabArray.eq(i).removeClass('menudark');      
    }
  }
}

function colorThem(atId) {
  let leftTabArray = $('.menutext');
  for (let i=0; i< leftTabArray.length; i++) {
    leftTabArray.eq(i).removeClass('menudark');
    if (leftTabArray[i].id === atId){
      leftTabArray.eq(i).addClass('menudark');
    }
  }
}
  

document.addEventListener('scroll', function () {

  if(theme==='student') { 
    const menuTabs = $('.menutext a');
    let top = parseInt($(window).scrollTop())+70;

    if (top < bioDist) {
      colorThem("top");
    } else if (top > bioDist && top < historyDist) {
      colorThem("biotab");
    } else if (top > historyDist && top < projectDist) {
      colorThem("historytab");
    } else if (top > projectDist && top < contactDist) {
      colorThem("projectstab");
    } else if (top > contactDist) {
      colorThem("contacttab");
    }

  } else if(theme==='entre') {

    if ($(this).scrollTop() === 0) {
      $('#menu').removeClass('menuscroll');
    } else {
      $('#menu').addClass('menuscroll');
    }

  } else {
    let top = parseInt($(window).scrollTop());

    if (!large) {
      top+=70 

      if (top < bioDist) {
        colorThem("top");
      } else if (top > bioDist && top < historyDist) {
        colorThem("biotab");
      } else if (top > historyDist && top < projectDist) {
        colorThem("historytab");
      } else if (top > projectDist) {
        colorThem("projectstab");
      }    
    } else {
      top = top;

      if (top < bioDist) {
        addRemove("top");
      } else if (top > bioDist && top < historyDist) {
        addRemove("biomenu");
      } else if (top > historyDist && top < projectDist) {
        addRemove("historymenu");
      } else if (top > projectDist) {
        addRemove("projectmenu");
      }    
    }
  }
}, true);

//------------------------ 
// Project Overlay
//------------------------

function changeOverlay(theme) {
  if (theme=="freggie"){
    $('#freggieover').show().siblings('.allovers').hide();
  } else if (theme=="winter"){
    $('#winterover').show().siblings('.allovers').hide();
  } else if (theme=="portfolio"){
    $('#portfolioover').show().siblings('.allovers').hide();
  } else if (theme=="uffda"){
    $('#uffdaover').show().siblings('.allovers').hide();
  } else if (theme=="easylife"){
    $('#easyover').show().siblings('.allovers').hide();
  } else if (theme=="sanatio"){
    $('#sanatioover').show().siblings('.allovers').hide();
  } else if (theme=="ese"){
    $('#ethansover').show().siblings('.allovers').hide();
  } else {
    $('#javascriptover').show().siblings('.allovers').hide();
  }
}

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

$('.project').click(function(e){
  let par = $(e.target).parent();
  if (par[0].id == "freggie" || par[0].id == "winter" || par[0].id == "portfolio" || par[0].id == "uffda" || par[0].id == "easylife" || par[0].id == "sanatio" || par[0].id == "ese" || par[0].id == "js") {
    changeOverlay(par[0].id);
    $('#projectoverlay').show();
  } else {
    let parPar = par.parent();
    if (parPar[0].id == "freggie" || parPar[0].id == "winter" || parPar[0].id == "portfolio" || parPar[0].id == "uffda" || parPar[0].id == "easylife" || parPar[0].id == "sanatio" || parPar[0].id == "ese" || parPar[0].id == "js"){
      changeOverlay(parPar[0].id);
      $('#projectoverlay').show();
    } else {
      let parParPar = parPar.parent();
      if (parParPar[0].id == "freggie" || parParPar[0].id == "winter" || parParPar[0].id == "portfolio" || parParPar[0].id == "uffda" || parParPar[0].id == "easylife" || parParPar[0].id == "sanatio" || parParPar[0].id == "ese" || parParPar[0].id == "js"){
        changeOverlay(parParPar[0].id);
        $('#projectoverlay').show();
      }
    }
  }
})

//------------------------
// Contact Appear
//------------------------

$('#contactme, #contactmebut, #footercontact, #contactclose').on('click', () => {
  let x = document.getElementById("contactslice");

  if (x.style.display === "none" || !x.style.display) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  x.scrollIntoView(); 
});

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
// circles
//------------------------

function circles() {
  const canvas = document.querySelector('#entrebgcanvas');
  canvas.width = document.querySelector('#entrebgcanvas').scrollWidth;
  canvas.height = (large) ? 70 : 100;
  const c = canvas.getContext('2d');
  const topRadius = 30;
  const colorArray = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ff00ff',
    '#ffff00',
    '#ad00ad'
  ];

  let mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  })

  window.addEventListener('resize', function() {
    canvas.width = document.querySelector('#entrebgcanvas').offsetWidth;
    canvas.height = document.querySelector('#entrebgcanvas').offsetHeight;
    init();
  });

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
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
      if (this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
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
    for (let i =0; i<15; i++) { 
      let radius = (Math.random() + 0.3) * 10;
      let x = Math.random() * ((canvas.width - radius*2) + radius*2);
      let y = Math.random() * (canvas.height - radius*2) + radius;
      let dx = Math.floor(Math.random() * 3) + 0.6;
      let dy = Math.floor(Math.random() * 2) + 0.8;
      dx *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      dy *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }

  function add() {
    let radius = (Math.random() + 0.3) * 10;
    let x = Math.random() * ((canvas.width - radius*2) + radius*2);
    let y = Math.random() * (canvas.height - radius*2) + radius;
    let dx = Math.floor(Math.random() * 3) + 0.6;
    let dy = Math.floor(Math.random() * 2) + 0.8;
    circleArray.push(new Circle(x, y, dx, dy, radius));    
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

// function spirals() {
 
//   const canvas = document.getElementById('entrebgcanvas');
//   const c = canvas.getContext('2d');
//   canvas.width = innerWidth;
//   canvas.height = 150;
//   const numDots = 5;
//   const outDistance = randomInt(20, 40);
//   const inDistance = 5;
  
//   const mouse = {
//     x: innerWidth/2,
//     y: innerHeight/2
//   };

//   const colorArray = [
//     $('#studentb').css( "background-color" ),
//     $('#availableslice').css( "background-color" ),
//     $('#third').css( "background-color" ),
//     $('#inscriberslide').css( "background-color" ),
//     $('#teachingslide').css( "background-color" )
//   ];
  
//   addEventListener('mousemove', event => {
//     mouse.x = event.clientX; //Changeing?
//     mouse.y = event.clientY;
    
//   });
  
//   addEventListener('resize', () => {
//     canvas.width = innerWidth;
//     canvas.height = 150;
//     init();
//   });
  
  
//   function randomColor() {
//     return colorArray[Math.floor(Math.random() * colorArray.length)];
//   }
  
//   function randomInt(min,max) {
//     return Math.floor(Math.random() * (max-min+1) + min);
//   }
  
//   function Dot(x, y) {
//     this.x = x;
//     this.y = y;
//     this.radius = randomInt(3,7);
//     this.color = randomColor();
//     this.radians = Math.random() * Math.PI*2;
//     this.velocity = randomInt(15, 40)/1000;
//     this.distance = randomInt(30, 50);
//     let origDist = JSON.parse(JSON.stringify(this.distance))
    
//     this.update = () => {
//       let scrollTop     = $(window).scrollTop(),
//           elementOffset = $('#menu').offset().top,
//           eleDistance      = (elementOffset - scrollTop);

//       if (mouse.y - (eleDistance + y) < 30 && mouse.y - (eleDistance + y) > -60 && mouse.x - x < 40 && x - mouse.x < 40) {
//         if (this.distance > inDistance) {
//           this.distance = this.distance - 2;
//         }
//       } else {
//         if (this.distance < origDist) {
//           this.distance++;
//         }
//       }
      
//       this.radians += this.velocity;
//       this.x = x + Math.cos(this.radians) * this.distance;
//       this.y = y + Math.sin(this.radians) * this.distance;
      
//       this.draw();
//     };
    
//     this.draw = () => {
//       c.beginPath();
//       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//       c.fillStyle = this.color;
//       c.fill();
//       c.closePath();
//     }
//   }
  
//   let dotArray1,dotArray2,dotArray3,dotArray4, bioCenter1, bioCenter2, bioCenter3, bioCenter4;
//   const bioDiv1 = $('#menu');

//   function init() {
//     dotArray1 = [];
//     dotArray2 = [];
//     dotArray3 = [];
//     dotArray4 = []; 
//     bioCenter1 = new Array( bioDiv1.width() * 0.16, bioDiv1.height() / 1.8 );
//     bioCenter2 = new Array( bioDiv1.width() * 0.426, bioDiv1.height() / 1.8 );
//     bioCenter3 = new Array( bioDiv1.width() * 0.695, bioDiv1.height() / 1.8 );
//     bioCenter4 = new Array( bioDiv1.width() * 0.964, bioDiv1.height() / 1.8 );

//     const tabArr = $('.menutabs');
//     const arrC = tabArr.map(tab => {
//       // console.log(tab);
//       let x = 0;
//       let y = 9;
//       let arr = [[x,y]];
//       return arr;
//     });
//     // console.log(arrC);
    



//     for(let i=0; i < numDots; i++) {
//       dotArray1.push(new Dot(bioCenter1[0], bioCenter1[1]));
//       dotArray2.push(new Dot(bioCenter2[0], bioCenter2[1]));
//       dotArray3.push(new Dot(bioCenter3[0], bioCenter3[1]));
//       dotArray4.push(new Dot(bioCenter4[0], bioCenter4[1]));
//     }
//   }
  
//   function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,canvas.width, canvas.height);

//     dotArray1.forEach(singleDot => {
//       singleDot.update();
//     });

//     dotArray2.forEach(singleDot => {
//       singleDot.update();
//     });

//     dotArray3.forEach(singleDot => {
//       singleDot.update();
//     });

//     dotArray4.forEach(singleDot => {
//       singleDot.update();
//     });
//   }
  
//   init();
//   animate();

// }

//------------------------
// Modernizr
//------------------------

function doneResizing() {
  if (Modernizr.mq('screen and (min-width:768px)')) {

    if (theme === 'entre') {
      $('#entrebgcanvas').css({'display': 'block'});
      timeOut = setTimeout(spirals, 1000);
    } else if (theme === 'student') {
      $('#entrebgcanvas').css({'display': 'block'});
      timeOut = setTimeout(circles, 1000);
    }

    large = true;

  } else {
      $('#entrebgcanvas').css({'display': 'none'});

      if (theme === 'student') {
      $('#entrebgcanvas').css({'display': 'block'});
        timeOut = setTimeout(circles, 1000);
      }

      large = false;

  }
}

var id5;
$(window).resize(function() {
  clearTimeout(id5);
  id5 = setTimeout(doneResizing, 0);
  resizeDist();
});

doneResizing();

//------------------------ 
// History Hover
//------------------------

$('.flexbox-slide').hover(function (e) {
  const thisSlide = $(this);
  const slideArray = $('.flexbox-slide');
  const textBlock = $(this).find('.textblock');
  const text = $(this).find('.historytext');
  const image = $(this).find('.historylogo');
  const titles = $(this).find('.historytitles');

  if (Modernizr.mq('screen and (max-width:992px)')) {

    textBlock.addClass('tbopen');
    text.addClass('hton');

  } else {

    thisSlide.addClass('flexopen');
    text.addClass('hton');
    image.addClass('historylogoside');
    titles.addClass('historytitlesside');
    textBlock.addClass('tbon');

    for(let i=0; i<slideArray.length; i++) {
      if (slideArray[i].id !== this.id) {
        slideArray[i].style.fontSize = '0.8em';
      }
    }

  }

}, function () {
  const thisSlide = $(this);
  const slideArray = $('.flexbox-slide');
  const textBlock = $(this).find('.textblock');
  const text = $(this).find('.historytext');
  const image = $(this).find('.historylogo');
  const titles = $(this).find('.historytitles');

  if (Modernizr.mq('screen and (max-width:992px)')) {

    textBlock.removeClass('tbopen');
    text.removeClass('hton');

  } else {

    text.removeClass('hton');
    thisSlide.removeClass('flexopen');
    image.removeClass('historylogoside');
    titles.removeClass('historytitlesside');
    textBlock.removeClass('tbon');

    for(let i=0; i<slideArray.length; i++) {
      if (slideArray[i].id !== this.id) {
        slideArray[i].style.fontSize = '1em';
      }
    }

  }

}); 

// drawer

let open = true;
$('#choicestab').click(drawer);

function endH(e) {
  if((e.propertyName === "width" || e.propertyName === 'height') && open) $('#choicesoptcont').toggleClass('cocon');
}

function endO(e) { 
  if(e.propertyName === "opacity" && !large && !open) {
      $('#choices').toggleClass('choiceso');
      $('#choicescont').toggleClass('choicesconto');
  } else if(e.propertyName === "opacity" && large && !open) {
    $('#choices').toggleClass('choicesh');
  }
}

function drawer() {
  console.log(open);
  if (large && !open) {
    $('#choices').toggleClass('choicesh'); 
    $('#choices')[0].addEventListener('transitionend', endH);
    open = true;
  } else if (large && open) {
    $('#choicesoptcont').toggleClass('cocon');
    $('#choices')[0].addEventListener('transitionend', endO);
    open = false;
  } else if (!large && !open && $('#choices').css("height") === "3px") {
    $('#choices').toggleClass('choiceso');
    $('#choicescont').toggleClass('choicesconto');
    $('#choices')[0].addEventListener('transitionend', endH);
    open = true;
  } else if (!large && open && $('#choices').css("height") === "55px") {
    $('#choicesoptcont').toggleClass('cocon');
    $('#choices')[0].addEventListener('transitionend', endO);
    open = false;
  }
}

$('#cheatsheet').click(showExplain);
$('#cheatsheetexpclose').click(showExplain);

function showExplain() {
  $('#cheatsheetexp').toggleClass('csopen');
}

// CSV

let lines = [];
let blogDay;

(function() {
    $.ajax({
        type: "GET",
        url: "doing.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
}());

function processData(allText) {
  const allTextLines = allText.split(/\r\n|\n/);
  const headers = allTextLines[0].split(',');
  const text = allTextLines[1].split(',');
  const dates = $("#dates"); 
  
  for(let i=text.length-1; i>=0; i--) {
    const day = headers[i];
    let date = document.createElement("option");
    date.textContent = day;
    date.value = day;
    dates.append(date);
  }

  $('#blogday').text(headers[headers.length-1]);
  $('#blogtext').text(text[text.length-1]);
  $('option').addClass('blogoption');

  $('#dates').change ((e) => {
      const day = e.target.value;
      const index = headers.indexOf(day);
      if(day === "choose") return;
      $('#blogday').text(day);
      $('#blogtext').text(text[index]);
  })
}


//-------------------
// desktop Icons
//-------------------

$('.mottoitems').click(showOver);

function showOver() {
  console.log(this.id);
  $('#' + this.id + "over").toggleClass('motto--over--open');
}

