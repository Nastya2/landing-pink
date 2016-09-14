
  var nav = document.querySelector('.menu__list-phone');
  
 document.querySelector('.nav-toggle').addEventListener('click',function(){
      nav.classList.add('open');
  });
  document.body.addEventListener('click',function(e){
  if (e.target.className !== 'nav-toggle' && e.target.className !== 'menu__link-phone') {
        nav.classList.remove('open');
  }
  });
      
      
var navMenu = document.querySelector('.menu__list');
var navItemAttr;
var navElem;
var elemCoord;
var navLink;
var V = 0.2;
var w = window.pageYOffset;

   navMenu.addEventListener('click',function(e){
   e.preventDefault();
   navLink = e.target;
   if (navLink.tagName != 'A') return;
   navItemAttr = navLink.getAttribute('href');
   navElem = document.querySelector(navItemAttr);
   elemCoord = navElem.getBoundingClientRect().top;

   
    var start = null;
    requestAnimationFrame(step);   
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (elemCoord < 0 ? Math.max(w - progress/V, w + elemCoord) : Math.min(w + progress/V, w + elemCoord));
      window.scrollTo(0,r);
      if (r != w + elemCoord) {
        requestAnimationFrame(step);
      } else {
        return;  // URL с хэшем
      }
    
  }; 
   
});


        