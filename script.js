//------------------------
// Project Icons hovering
//------------------------
let projectWidth = $(".project").width().toString();
let projectHeight = $(".project").height().toString();
let bottoms = $('.bottom');
let tops = $('.top');
$('.bottom')  
  .css({ borderBottomWidth: projectHeight + 'px', borderLeftWidth: projectWidth + 'px' })
  .addClass('animate');
$('.top')  
  .css({ borderRightWidth: projectWidth + 'px', borderTopWidth: projectHeight + 'px' })  
  .addClass('animate');

$('.project').hover(function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function() {
    // console.log(this);
    if(this.className == "top animate"){
      this.style.top = '0px';
      this.style.left = '0px';
    } else if(this.className == "bottom animate"){
      this.style.top = '0px';
      this.style.left = '0px';
    } else if(this.className == "protext"){
      this.style.fontSize = '1.7em';
      this.style.marginTop = '10px';
      this.style.marginbottom = '10px';
      this.style.backgroundColor = 'rgba(255, 218, 218, 0.8)';
    } else if(this.className == "protextw"){
      this.style.fontSize = '0.7em';
    }
  })
}, function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function() {
    if(this.className == "top animate"){
      this.style.top = '-' + projectHeight + 'px';
      this.style.left = '-' + projectWidth + 'px';
    } else if(this.className == "bottom animate"){
      this.style.top = projectHeight + "px";
      this.style.left = projectWidth + "px";
    } else if(this.className == "protext"){
      this.style.fontSize = '0em';
      this.style.marginTop = '50px';
      this.style.backgroundColor = 'transparent';
    } else if(this.className == "protextw"){
      this.style.fontSize = '0em';
    }
  })
});

//------------------------
// footer Icons hovering
//------------------------

$('.contacttype').hover(function() {
  let footerChilds = jQuery("div", this);
  footerChilds.each(function(elem) {
  console.log($(this));
    $(this).find('.contacttype').css({'font-size': '2em'});
    $(this).find('.footertext').css({'visibility': 'visible', 'color': 'black'});
  })
}, function() {
  let footerChilds = jQuery("div", this);
  footerChilds.each(function() {
    $(this).find('.contacttype').css({'font-size': '1em'});
    $(this).find('.footertext').css({'visibility': 'hidden'});
  })  
});

