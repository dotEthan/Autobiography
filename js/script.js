let bioDist, historyDist, projectDist;
let bodyDone = 0,
soulDone = 0;
//-----------------------
//Loading
//-----------------------

var myVar;

function pageDelay() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
  $('#load').css({'display': 'none'});
  $('#contents').css({'display': 'block'});
  resizeDist();
  resizeHover();
}

pageDelay();

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
    pageDelay();
    bodyDone++;
  }
  $('link[rel=stylesheet]').attr({href : '../css/bodystyle.css'}); 
});

$('#mindb').click(function() {
  $('link[rel=stylesheet]').attr({href : 'css/style.css'}); 
  setTextContent(textChange, 'was designed and built to facilitate entrepreneurial success. If you want a leg up on the competition,');
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
    $('.menutabs a').removeClass('menunow');
  } else if (event.pageY > bioDist && event.pageY < historyDist) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#bioslice"]').addClass('menunow');
  } else if (event.pageY > historyDist && event.pageY < projectDist) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#historyslice"]').addClass('menunow');
  } else if (event.pageY > projectDist) {
    $('.menutabs a').removeClass('menunow');
    $('a[href="#projectslice"]').addClass('menunow');
  }
}, true);

//------------------------
// Project Overlay
//------------------------

$('#projectoverlay').hide();

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
        var o={content:$(this).text(),delay:50,t:this,i:0};
        if(s){$.extend(o,s);}o.t.text('');
        var i=setInterval(function() {
            o.t.text(o.t.text()+o.content.charAt(o.i++));    
            if(o.i==o.content.length){clearInterval(i);}}
        ,o.delay);
      return o.t;  
    };})(jQuery);
    $('#namemotto').typeWrite({content:'Student, Programmer, Entrepreneur'});


//------------------------
// Contact Appear
//------------------------

$('#contactme, #contactmebut, #contactfooter').on('click', () => {
  $('#contactslice').show();
});

//------------------------
// Contact Form
//------------------------

// $('#submit').click(function() {
//   var name = $('#name').val();
//   var email = $('#email').val();
//   var message = $('#message').val();
//   var contact = $('#contact').val();
//   $('#returnmessage').empty(); // To empty previous error/success message.
//   // Checking for blank fields.
//   if (name == ' ' || email == '' || contact == '') {
//     console.log('empty');
//     alert('Please Fill Required Fields');
//   } else {
//     // Returns successful data submission message when the entered information is stored in database.
//     $.post('../php/contact_form.php', {
//       name1: name,
//       email1: email,
//       message1: message,
//       contact1: contact
//     }, function(data) {
//       $('#returnmessage').append(data); // Append returned message to message paragraph.
//       if (data == 'Your Query has been received, We will contact you soon.') {
//         $('#form')[0].reset(); // To reset form fields on success.
//       }
//     });
//   }
// });

$('#submit').click(function(e) {

  var fname = $('#name').val();
  var phone = $('#phone').val();
  var email = $('#email').val();
  var inquiry = $('#inquiry').val();
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

  