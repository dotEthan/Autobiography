"use strict";

// USING?

// Call everything same order?
// Programmer mobile animation doesn't stop when you go to student then back.
// ALL CLASSES. No text change function
// Project Overlay - Refactor so single function for all
// project overlay - not hidden to start?

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
  $("#load").css({ display: "none" });
  $("#contents").css({ display: "block" });
  resizeDist();
}

pageDelay(showPage);

//-----------------------
//Alterations
//-----------------------
function setTextContent(element, text) {
  while (element.firstChild !== null) element.removeChild(element.firstChild); // remove all existing content
  element.appendChild(document.createTextNode(text));
}

let textChange = document.getElementById("sitebuild");
let quoteChange = document.getElementById("biowriting");
let asaChange = document.getElementById("asa");
let quoteNameChange = document.getElementById("quotename");
let bioChange = document.getElementById("ageinfo");

$("#student, #studentpro").click(function() {
  window.cancelAnimationFrame(animating);
  if (studentDone == 0) {
    $("#load").css({ display: "block" });
    $("#contents").css({ display: "none" });
    pageDelay(showPage);
    studentDone++;
  }
  $("link[rel=stylesheet]").attr({ href: "../css/studentstyle.css" });
  theme = "student";
  setTextContent(
    textChange,
    "has been built using lego. If you want to play with the blocks,"
  );
  setTextContent(
    quoteChange,
    "“When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.”"
  );
  setTextContent(quoteNameChange, "- C.S. Lewis");
  setTextContent(asaChange, "As a Student:");
  setTextContent(
    bioChange,
    "I grew up in small town Ontario, than big city BC, then small town BC, then small town Manitoba, than back to BC for a couple cities and then back to Ontario. We moved a lot. It is likely one of the reasons I am able to easily adapt to the various environments life takes me to."
  );
  $("#personalimg").attr("src", "../images/bios.jpg");
  doneResizing();
});

$("#entre, #entrepro").click(function() {
  window.cancelAnimationFrame(animating);
  if (entreDone == 0) {
    $("#load").css({ display: "block" });
    $("#contents").css({ display: "none" });
    pageDelay(showPage);
    entreDone++;
  }
  $("#entrebgcanvas").css("display", "none");
  $("link[rel=stylesheet]").attr({ href: "css/entrestyle.css" });
  theme = "entre";
  setTextContent(
    textChange,
    "was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,"
  );
  setTextContent(
    quoteChange,
    "“From my very first day as an entrepreneur, I've felt the only mission worth pursuing in business is to make people's lives better.”"
  );
  setTextContent(quoteNameChange, "- Richard Branson");
  setTextContent(asaChange, "As an Entrepreneur:");
  setTextContent(
    bioChange,
    "I spent my 20s in China, learning a new culture, language and how to develop long term plans and put them into action. I had numerous jobs including Bar Manager, University professor, Radio Host and more. And I developed and opened a number of different entreprenerial ventures that pushed me to learn web development, leadership skills and to hone my customer service techniques."
  );
  $("#personalimg").attr("src", "../images/bioe.jpg");
  doneResizing();
});

$("#programmer, #programmerpro").click(function() {
  $("link[rel=stylesheet]").attr({ href: "css/style.css" });
  theme = "programmer";
  $("#entrebgcanvas").css("display", "none");
  window.cancelAnimationFrame(animating);
  setTextContent(
    textChange,
    "was developed using Javascript, Jquery, HTML, and SCSS. If you want to look at the code,"
  );
  setTextContent(
    quoteChange,
    '"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."'
  );
  setTextContent(quoteNameChange, "- Brian W. Kernighan");
  setTextContent(asaChange, "As a Programmer:");
  setTextContent(
    bioChange,
    "Since returning to Canada I have opened two successful entrepreneurial ventures and learned a number of new langauges including Javascript, SCSS, React, Liquid and more. I've devoted the last six months to brushing up on HTML 5, SCSS, Javascript ES6 and learning React to ensure I have a firm grasp of the tools needed to succeed as a Front End Development or Javavscript programming."
  );
  $("#personalimg").attr("src", "../images/biop.jpg");
  pageDelay(showPage);
  doneResizing();
});

//-----------------------
//Text Fade
//-----------------------

$("#biobio")
  .stop()
  .animate(
    {
      opacity: 0
    },
    0
  );

$("#biocontain").hover(
  function() {
    $("#biobio").addClass("unhidden");
    $("#bioquote")
      .stop()
      .animate(
        {
          opacity: 0
        },
        1000
      );
    $("#biobio")
      .stop()
      .animate(
        {
          opacity: 1
        },
        1000
      );
  },
  function() {
    $("#bioquote")
      .stop()
      .animate(
        {
          opacity: 1
        },
        1000
      );
    $("#biobio")
      .stop()
      .animate(
        {
          opacity: 0
        },
        1000
      );
    setTimeout($("#biobio").removeClass("unhidden"), 1000);
  }
);

//-----------------------
// Scrolling Position
//-----------------------
function resizeDist() {
  historyDist = $("#historyslice").offset().top;
  bioDist = $("#bioslice").offset().top;
  projectDist = $("#projectslice").offset().top;
  contactDist =
    parseInt($("#projectslice").offset().top) +
    parseInt($("#projectslice").css("height"));
}

function addRemove(atId) {
  let menuTabArray = $(".menutabs");
  for (let i = 0; i < menuTabArray.length; i++) {
    if (menuTabArray[i].id === atId) {
      menuTabArray.eq(i).addClass("menudark");
    } else {
      menuTabArray.eq(i).removeClass("menudark");
    }
  }
}

function colorThem(atId) {
  let leftTabArray = $(".menutext");
  for (let i = 0; i < leftTabArray.length; i++) {
    leftTabArray.eq(i).removeClass("menudark");
    if (leftTabArray[i].id === atId) {
      leftTabArray.eq(i).addClass("menudark");
    }
  }
}

document.addEventListener(
  "scroll",
  function() {
    if (theme === "student") {
      const menuTabs = $(".menutext a");
      let top = parseInt($(window).scrollTop()) + 70;

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
    } else if (theme === "entre") {
      if ($(this).scrollTop() === 0) {
        $(".menu").removeClass("menuscroll");
        $(".menucontain").removeClass("menuup");
      } else {
        $(".menu").addClass("menuscroll");
        $(".menucontain").addClass("menuup");
      }
    } else {
      let top = parseInt($(window).scrollTop());

      if (!large) {
        top += 70;

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
  },
  true
);

//------------------------
// Project Overlay
//------------------------

function changeOverlay(theme) {
  if (theme == "freggie") {
    $("#freggieover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "winter") {
    $("#winterover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "portfolio") {
    $("#portfolioover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "uffda") {
    $("#uffdaover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "easylife") {
    $("#easyover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "sanatio") {
    $("#sanatioover")
      .show()
      .siblings(".allovers")
      .hide();
  } else if (theme == "ese") {
    $("#ethansover")
      .show()
      .siblings(".allovers")
      .hide();
  } else {
    $("#javascriptover")
      .show()
      .siblings(".allovers")
      .hide();
  }
}

$("#projectoverlay").hide();

function PopupCenter(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft =
    window.screenLeft != undefined ? window.screenLeft : window.screenX;
  var dualScreenTop =
    window.screenTop != undefined ? window.screenTop : window.screenY;

  var width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
  var height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  var newWindow = window.open(
    url,
    title,
    "scrollbars=yes, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );

  if (window.focus) {
    newWindow.focus();
  }
}

$("#closeover").click(function() {
  $("#projectoverlay").hide();
});

$(".project").click(function(e) {
  let par = $(e.target).parent();
  if (
    par[0].id == "freggie" ||
    par[0].id == "winter" ||
    par[0].id == "portfolio" ||
    par[0].id == "uffda" ||
    par[0].id == "easylife" ||
    par[0].id == "sanatio" ||
    par[0].id == "ese" ||
    par[0].id == "js"
  ) {
    changeOverlay(par[0].id);
    $("#projectoverlay").show();
  } else {
    let parPar = par.parent();
    if (
      parPar[0].id == "freggie" ||
      parPar[0].id == "winter" ||
      parPar[0].id == "portfolio" ||
      parPar[0].id == "uffda" ||
      parPar[0].id == "easylife" ||
      parPar[0].id == "sanatio" ||
      parPar[0].id == "ese" ||
      parPar[0].id == "js"
    ) {
      changeOverlay(parPar[0].id);
      $("#projectoverlay").show();
    } else {
      let parParPar = parPar.parent();
      if (
        parParPar[0].id == "freggie" ||
        parParPar[0].id == "winter" ||
        parParPar[0].id == "portfolio" ||
        parParPar[0].id == "uffda" ||
        parParPar[0].id == "easylife" ||
        parParPar[0].id == "sanatio" ||
        parParPar[0].id == "ese" ||
        parParPar[0].id == "js"
      ) {
        changeOverlay(parParPar[0].id);
        $("#projectoverlay").show();
      }
    }
  }
});

//------------------------
// Contact Appear
//------------------------

$("#contactme, #contactmebut, #footercontact, #contactclose").on(
  "click",
  () => {
    let x = document.getElementById("contactslice");

    if (x.style.display === "none" || !x.style.display) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    x.scrollIntoView();
  }
);

//------------------------
// Contact Form
//------------------------

$("#submit").click(function(e) {
  let fname = $("#name").val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let inquiry = $("#inquiry").val();
  $("#returnmessage").empty(); // To empty previous error/success message.

  // Checking for blank fields
  if (fname == "" || email == "" || inquiry == "") {
    alert("Please Fill Required Fields");
    e.preventDefault();
  } else {
    // Returns successful data submission message when the entered information is stored in database.
    $.post(
      "../php/contact_form1.php",
      {
        fname1: fname,
        phone1: phone,
        email1: email,
        inquiry1: inquiry
      },
      function(data) {
        $("#returnmessage").append(data); // Append returned message to message paragraph.

        if (data == "Your Query has been received, We will contact you soon.") {
          $("#inquiryform")[0].reset(); // To reset form fields on success.
        }
      }
    );
    e.preventDefault();
  }
});
//------------------------
// circles
//------------------------

function circles() {
  const canvas = document.querySelector("#entrebgcanvas");
  canvas.width = document.querySelector("#entrebgcanvas").scrollWidth;
  canvas.height = large ? 70 : 100;
  const c = canvas.getContext("2d");
  const topRadius = 30;
  const colorArray = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff00ff",
    "#ffff00",
    "#ad00ad"
  ];

  let mouse = {
    x: undefined,
    y: undefined
  };

  window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("resize", function() {
    canvas.width = document.querySelector("#entrebgcanvas").offsetWidth;
    canvas.height = document.querySelector("#entrebgcanvas").offsetHeight;
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
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    };

    this.update = function() {
      if (this.y + this.radius > canvas.height || this.y - this.radius <= 0) {
        this.dy = -this.dy;
      }
      if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }

      this.x += this.dx;
      this.y += this.dy;

      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < topRadius) {
          this.radius += 1;
        }
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  }

  let circleArray = [];
  function init() {
    circleArray = [];
    for (let i = 0; i < 15; i++) {
      let radius = (Math.random() + 0.3) * 10;
      let x = Math.random() * (canvas.width - radius * 2 + radius * 2);
      let y = Math.random() * (canvas.height - radius * 2) + radius;
      let dx = Math.floor(Math.random() * 3) + 0.6;
      let dy = Math.floor(Math.random() * 2) + 0.8;
      dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  }

  function add() {
    let radius = (Math.random() + 0.3) * 10;
    let x = Math.random() * (canvas.width - radius * 2 + radius * 2);
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = Math.floor(Math.random() * 3) + 0.6;
    let dy = Math.floor(Math.random() * 2) + 0.8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  function animate() {
    c.clearRect(0, 0, canvas.width, innerHeight);
    animating = requestAnimationFrame(animate);
    if (!timeOut) return;
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  init();
  animate();
}

//------------------------
// Modernizr
//------------------------

function doneResizing() {
  if (theme === "student") {
    $("#entrebgcanvas").css({ display: "block" });
    timeOut = setTimeout(circles, 1000);
  }

  Modernizr.mq("screen and (min-width:768px)")
    ? (large = true)
    : (large = false);
}

var id5;
$(window).resize(function() {
  clearTimeout(id5);
  id5 = setTimeout(doneResizing, 0);
  resizeDist();
});

doneResizing();

//------------------------
// History click
//------------------------

$(".flexbox-slide").click(e => {
  const thisSlide = e.currentTarget;
  const slideArray = $(".flexbox-slide");
  const textBlock = thisSlide.querySelector(".textblock");
  const text = thisSlide.querySelector(".historytext");
  const image = thisSlide.querySelector(".historylogo");
  const titles = thisSlide.querySelector(".historytitles");
  const imgtitle = thisSlide.querySelector(".imgtitle");
  const flexcont = thisSlide.querySelector(".flexcontainer");

  if (thisSlide.classList.contains("open")) {
    // This already open
    thisSlide.classList.remove("open");
  } else if ($(".flexbox-slide").hasClass("open")) {
    // Another open
    removeAll();
    $(".flexbox-slide").removeClass("open");
    thisSlide.classList.toggle("open");
  } else {
    thisSlide.classList.toggle("open"); // None open
  }

  if (Modernizr.mq("screen and (max-width:992px)")) {
    // Small

    textBlock.classList.toggle("tbopen");
    text.classList.toggle("hton");
  } else {
    // Large

    if (Modernizr.mq("screen and (max-width:1600px)")) {
      // Extra large
      flexcont.classList.toggle("fcon");
    }

    text.classList.toggle("hton");
    image.classList.toggle("historylogoside");
    titles.classList.toggle("historytitlesside");
    textBlock.classList.toggle("tbon");
    imgtitle.classList.toggle("itopen");
  }

  function textResize(current) {
    for (let i = 0; i < slideArray.length; i++) {
      if (slideArray[i].id !== thisSlide.id) {
        slideArray[i].style.fontSize = "0.8em";
      }
    }
  }

  function removeAll() {
    if ($(".textblock").hasClass("tbon")) $(".textblock").removeClass("tbon");
    if ($(".textblock").hasClass("tbopen"))
      $(".textblock").removeClass("tbopen");
    if ($(".textblock").hasClass("tbon")) $(".textblock").removeClass("tbon");
    if ($(".historytext").hasClass("hton"))
      $(".historytext").removeClass("hton");
    if ($(".historylogo").hasClass("historylogoside"))
      $(".historylogo").removeClass("historylogoside");
    if ($(".historytitles").hasClass("historytitlesside"))
      $(".historytitles").removeClass("historytitlesside");
    if ($(".imgtitle").hasClass("itopen")) $(".imgtitle").removeClass("itopen");
  }
});

//----------------
// drawer
//----------------

let open = true;
$("#choicestab").click(drawer);

function endH(e) {
  console.log(`That's are ${e.propertyName}`);
  // Not Open
  if (e.propertyName === "width" || e.propertyName === "height") {
    $("#choicesoptcont").toggleClass("cocon");
    open = true;
  }
}

function endO(e) {
  console.log(`this is ${e.propertyName}`);
  // Open
  if (e.propertyName === "opacity" && !large) {
    $("#choices").toggleClass("choiceso");
    $("#choices__contain").toggleClass("choices__containo");
    open = false;
  } else if (e.propertyName === "opacity" && large) {
    $("#choices").toggleClass("choicesh");
    open = false;
  }
}

function drawer() {
  if (large && !open) {
    console.log("large and not open");
    $("#choices").toggleClass("choicesh"); // Open drawer
    $("#choices")[0].addEventListener("transitionend", endH); // Turn on Icons
  } else if (large && open) {
    console.log("large and open");
    $("#choicesoptcont").toggleClass("cocon"); // Turn off Icons
    $("#choices")[0].addEventListener("transitionend", endO); // Close Drawer
  } else if (!large && !open) {
    console.log("small and not open");
    $("#choices").toggleClass("choiceso"); // Open Drawer
    $("#choices__contain").toggleClass("choices__containo"); // Open Drawer
    $("#choices")[0].addEventListener("transitionend", endH); // Turns on icons
  } else if (!large && open) {
    console.log("small and open");
    $("#choicesoptcont").toggleClass("cocon"); // Turns off icons
    $("#choices")[0].addEventListener("transitionend", endO); // Closes
  }
}

$("#cheatsheet").click(showExplain);
$("#themewhy").click(showExplain);
$("#cheatsheetexpclose").click(showExplain);

function showExplain() {
  $("#cheatsheetexp").toggleClass("csopen");
}

//-------------------
// desktop Icons
//-------------------

let openArr = [];
let click = 0;
$(".over__title__close").click(closeEle);

function closeEle() {
  const ele = this.parentNode.parentNode.id;
  $(`#${ele}`).removeClass(
    "desktop__over__open--one desktop__over__open--multi"
  );
  openArr.splice(openArr.indexOf(ele.split("_")[0]));
}

$(".desktop__items").click(showOver);

function showOver() {
  const eleId = this.id;
  const classNames = $(`#${eleId}__over`)[0].className;
  const openArrL = openArr.length;

  if (!large) {
    if (openArr.includes(eleId)) {
      $(`#${eleId}__over`).removeClass("desktop__over__open--one");
      openArr.splice(openArr.indexOf(eleId), 1);
    } else {
      if (!$("desktop__over").hasClass("desktop__over--open")) {
        $(".desktop__over").addClass("desktop__over--open");
      }
      $(".desktop__over__each").removeClass("desktop__over__open--one");
      openArr = [];
      $(`#${eleId}__over`).addClass("desktop__over__open--one");
      openArr.push(eleId);
    }
  } else {
    if (openArr.includes(eleId)) {
      openArr.splice(openArr.indexOf(eleId), 1);
      $(`#${eleId}__over`).removeClass("desktop__over__open--multi");
    } else {
      if (!$("desktop__over").hasClass("desktop__over--open")) {
        $(".desktop__over").addClass("desktop__over--open");
      }
      openArr.push(eleId);
      $(`#${eleId}__over`).css("order", click + 1);
      $(`#${eleId}__over`).addClass("desktop__over__open--multi");
      click++;
    }
  }
  if (openArr.length === 0)
    $(".desktop__over").removeClass("desktop__over--open");
}

//-------------------
// Close Overlays with Esc
//-------------------

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key == "Escape" || evt.key == "Esc";
  } else {
    isEscape = evt.keyCode == 27;
  }

  if (isEscape) {
    if ($(".slide__contain").hasClass("slide--open"))
      $(".slide__contain").removeClass("slide--open");

    if ($("#projectoverlay").is(":visible")) $("#projectoverlay").hide();
    if ($("#cheatsheetexp").is(":visible")) $("#cheatsheetexp").hide();
  }
};

//-------------------
// Slick Slide
//-------------------

$("#coop").click(e => {
  $(".slide__contain").toggleClass("slide--open");
  $(".slide").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$(".coop__close").click(() => {
  $(".slide__contain").removeClass("slide--open");
});

$(".trash__stuff").click(() => {
  window.alert(
    "Please contact the Website Administrator to have items in trash restored to desktop. Thank you."
  );
});
