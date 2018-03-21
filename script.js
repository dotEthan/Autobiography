let projectWidth = $(".project").width();
let projectHeight = $(".project").height();
console.log(projectHeight);
// $('.bottom').left = projectWidth;
// $('.bottom').top = projectHeight;
$('.project').hover(function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function(x, elem) {
    if(elem.className == "top"){
      elem.style.top = '0px';
      elem.style.left = '0px';
      console.log(elem);
    } else if(elem.className == "bottom"){
      elem.style.top = '0px';
      elem.style.left = '0px';
    } else if(elem.className == "protext"){
      elem.style.fontSize = '1.7em';
      elem.style.marginTop = '10px';
      elem.style.marginbottom = '10px';
      elem.style.backgroundColor = 'rgba(255, 218, 218, 0.8)';
    } else if(elem.className == "protextw"){
      elem.style.fontSize = '0.7em';
    }
  })
}, function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function(x, elem) {
    if(elem.className == "top"){
      elem.style.top = '-220px';
      elem.style.left = '-20%';
    } else if(elem.className == "bottom"){
      elem.style.top = projectHeight;
      elem.style.left = '10%';
    } else if(elem.className == "protext"){
      elem.style.fontSize = '0em';
      elem.style.marginTop = '50px';
      elem.style.backgroundColor = 'transparent';
    } else if(elem.className == "protextw"){
      elem.style.fontSize = '0em';
    }
  })
});
