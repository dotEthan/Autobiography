let bioDist, historyDist, projectDist;
let bodyDone = 0,
soulDone = 0;
//-----------------------
//Loading
//-----------------------

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
  $("#load").css({"display": "none"});
  $("#contents").css({"display": "block"});
  resizeDist();
  resizeHover();
}

myFunction();

//-----------------------
//Alterations
//-----------------------

$("#bodyb").click(function() {
  if (bodyDone == 0) {
    $("#load").css({"display": "block"});
    $("#contents").css({"display": "none"});
    myFunction();
    bodyDone++;
  }
  $("link[rel=stylesheet]").attr({href : "../css/bodystyle.css"}); 
});

$("#mindb").click(function() {
  $("link[rel=stylesheet]").attr({href : "css/style.css"}); 
});
  
$("#soulb").click(function() { 
  if (soulDone == 0) {
    $("#load").css({"display": "block"});
    $("#contents").css({"display": "none"});
    myFunction();
    soulDone++;
  }
  $("link[rel=stylesheet]").attr({href : "css/soulstyle.css"}); 
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
    $(bioquestion).stop().animate({
        'opacity': 0
    }, 1000);
    $(biopersonal).stop().animate({
        'opacity': 1
    }, 1000);
}, function () {
    $(biowriting).stop().animate({
        'opacity': 1
    }, 1000);
    $(bioquestion).stop().animate({
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
}
  
  
document.addEventListener('scroll', function (event) {
  if (event.pageY < bioDist) {
    $('a').removeClass();
  } else if (event.pageY > bioDist && event.pageY < historyDist) {
    $('a').removeClass();
    $('a[href="#bioslice"]').addClass('menunow');
  } else if (event.pageY > historyDist && event.pageY < projectDist) {
    $('a').removeClass();
    $('a[href="#historyslice"]').addClass('menunow');
  } else if (event.pageY > projectDist) {
    $('a').removeClass();
    $('a[href="#projectslice"]').addClass('menunow');
  }
}, true);

//------------------------
//Overlay
//------------------------

$('#projectoverlay').hide();

$('#closeover').click(function() {
  $('#projectoverlay').hide();
});

$('#freggie').click(function() {
  $('#projectoverlay').show();
});

//------------------------
//Resizing Hovers
//------------------------
function resizeHover() {
    let projectWidth = $(".project").width().toString();
    let projectHeight = $(".project").height().toString();
    $('.bottom').css({ borderBottomWidth: projectHeight + 'px', borderLeftWidth: projectWidth + 'px' });
    $('.top').css({ borderRightWidth: projectWidth + 'px', borderTopWidth: projectHeight + 'px' });
}

//------------------------
//Typewrite
//------------------------

(function($){$.fn.typeWrite=function(s){
        var o={content:$(this).text(),delay:50,t:this,i:0};
        if(s){$.extend(o,s);}o.t.text('');
        var i=setInterval(function() {
            o.t.text(o.t.text()+o.content.charAt(o.i++));    
            if(o.i==o.content.length){clearInterval(i);}}
        ,o.delay);
      return o.t;  
    };})(jQuery);
    $('#namemotto').typeWrite({content:'Student, Programmer, Entrepreneur'});
