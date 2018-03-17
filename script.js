$('.project').hover(function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function(x, elem) {
    console.log(elem.id);
    if(elem.id == "top"){
      elem.style.top = '0px';
      elem.style.left = '0px';
    } else if(elem.id == "bottom"){
      elem.style.top = '0px';
      elem.style.left = '0px';
    } else if(elem.id == "protext"){
      elem.style.fontSize = '2em';
    }
  })
}, function() {
  let divChilds = jQuery("div", this);
  divChilds.each(function(x, elem) {
    if(elem.id == "top"){
      elem.style.top = '-220px';
      elem.style.left = '-320px';
    } else if(elem.id == "bottom"){
      elem.style.top = '150px';
      elem.style.left = '150px';
    } else if(elem.id == "protext"){
      elem.style.fontSize = '0em';
    }
  })
});
