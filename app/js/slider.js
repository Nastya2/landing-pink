


var count = 1;
var list = document.querySelector('.riviews-text');
var listElems = list.querySelectorAll('li');
var position = 0;
document.querySelector('.slider-previous').onclick = function() {
    if (document.body.clientWidth > 480) {
     
      var width = document.body.clientWidth*0.74*0.85*5*0.191 + 35;
      position = Math.min(position + width, 0)
      list.style.marginLeft = position + 'px';
      return false;   
    }
};
      

document.querySelector('.slider-next').onclick = function() {
    if (document.body.clientWidth > 480) {
      var width = document.body.clientWidth*0.74*0.85*5*0.191 + 40 ;
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
      return false;   
    }
};