//------------------------
// Project Icons hovering
//------------------------
let projectWidth = $(".project").width().toString();
let projectHeight = $(".project").height().toString();
$('.bottom')  
  .css({ borderBottomWidth: projectHeight + 'px', borderLeftWidth: projectWidth + 'px' });
$('.top')  
  .css({ borderRightWidth: projectWidth + 'px', borderTopWidth: projectHeight + 'px' });

//-----------------------
// Scrolling Position
//-----------------------
let historydist = $('#historyslice').offset().top;
let biodist = $('#bioslice').offset().top;
let projectdist = $('#projectslice').offset().top;
let contactdist = $('#contactslice').offset().top;


document.addEventListener('scroll', function (event) {
  if (event.pageY < biodist) {
    $('a').removeClass();
  } else if (event.pageY > biodist && event.pageY < historydist) {
    $('a').removeClass();
    $('a[href="#bioslice"]').addClass('menunow');
  } else if (event.pageY > historydist && event.pageY < projectdist) {
    $('a').removeClass();
    $('a[href="#historyslice"]').addClass('menunow');
  } else if (event.pageY > projectdist && event.pageY < contactdist) {
    $('a').removeClass();
    $('a[href="#projectslice"]').addClass('menunow');
  } else if (event.pageY > contactdist && event.pageY < projectdist) {
    $('a').removeClass();
    $('a[href="#contactslice"]').addClass('menunow');
  }
}, true);
