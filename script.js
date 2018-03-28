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
let historydist = $('#historyslice').offset().top;
let biodist = $('#bioslice').offset().top;
let projectdist = $('#projectslice').offset().top;


document.addEventListener('scroll', function (event) {
  if (event.pageY < biodist) {
    $('a').removeClass();
  } else if (event.pageY > biodist && event.pageY < historydist) {
    $('a').removeClass();
    $('a[href="#bioslice"]').addClass('menunow');
  } else if (event.pageY > historydist && event.pageY < projectdist) {
    $('a').removeClass();
    $('a[href="#historyslice"]').addClass('menunow');
  } else if (event.pageY > projectdist) {
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
//Maybe for Changing styles
//------------------------

//reload css keep dom
//reappropriated and adjusted from 
//http://www.vidalquevedo.com/how-to-load-css-stylesheets-dynamically-with-jquery

// $(document).ready(function(){

//   if($("#container").size()>0){
//     if (document.createStyleSheet){
//       document.createStyleSheet('style.css');
//     }
//     else {
//       $("head").append($("<link rel='stylesheet' href='style.css' type='text/css' media='screen' />"));
//     }
//   }
// });

//------------------------
//Resizing Hovers
//------------------------

$(window).bind("load", function() {
  let projectWidth = $(".project").width().toString();
  let projectHeight = $(".project").height().toString();
  $('.bottom').css({ borderBottomWidth: projectHeight + 'px', borderLeftWidth: projectWidth + 'px' });
  $('.top').css({ borderRightWidth: projectWidth + 'px', borderTopWidth: projectHeight + 'px' });
});

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
