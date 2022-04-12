//Stiky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("mainmenu-arena");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  if(window.pageYOffset < sticky){
    navbar.classList.remove("sticky");
  }
}



// Slick slider
$('.testimonials-slides').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 200, 
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:true,
  });
